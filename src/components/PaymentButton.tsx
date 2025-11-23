import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loadRazorpay, formatAmount } from '../utils/razorpay';

interface PaymentButtonProps {
  amount: number;
  currency?: string;
  buttonText?: string;
  className?: string;
  planName?: string;
  roomType?: string;
  guestName?: string;
  checkInDate?: string;
  checkOutDate?: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount,
  currency = 'INR',
  buttonText = 'Book Now',
  className = 'bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold',
  planName = 'Room Booking',
  roomType = 'Standard Room',
  guestName = 'Guest',
  checkInDate = '',
  checkOutDate = ''
}) => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      // Razorpay load karo
      const loaded = await loadRazorpay();
      if (!loaded) {
        alert('Payment gateway loading failed. Please refresh and try again.');
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: formatAmount(amount),
        currency: currency,
        name: 'Radhikasadan',
        description: `Booking for ${roomType}`,
        image: 'https://radhikasadan.com/logo.png', // Add your logo here
        handler: function (response: any) {
          // Payment successful - success page redirect karo
          console.log('Payment Success:', response);
          navigate('/booking/success', { 
            state: { 
              paymentId: response.razorpay_payment_id,
              amount: amount,
              roomType: roomType,
              guestName: guestName,
              checkInDate: checkInDate,
              checkOutDate: checkOutDate,
              bookingId: `RAD${Date.now()}`
            }
          });
        },
        prefill: {
          name: guestName,
          email: 'guest@radhikasadan.com',
          contact: '+919999999999'
        },
        notes: {
          room_type: roomType,
          check_in: checkInDate,
          check_out: checkOutDate,
          property: 'Radhikasadan'
        },
        theme: {
          color: '#10B981' // Green theme for hotel/booking
        },
        modal: {
          ondismiss: function() {
            // User ne modal band kiya
            console.log('Payment cancelled by user');
            navigate('/booking/failed', { 
              state: { reason: 'Booking cancelled by user' }
            });
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        // Payment failed - failure page redirect karo
        console.error('Payment Failed:', response.error);
        navigate('/booking/failed', { 
          state: { 
            error: response.error,
            reason: response.error.description,
            roomType: roomType,
            amount: amount
          }
        });
      });

      rzp.open();
      
    } catch (error) {
      console.error('Payment Error:', error);
      navigate('/booking/failed', { 
        state: { error: 'Booking processing failed' }
      });
    }
  };

  return (
    <button
      onClick={handlePayment}
      className={className}
      type="button"
    >
      {buttonText} - ₹{amount}
    </button>
  );
};

export default PaymentButton;