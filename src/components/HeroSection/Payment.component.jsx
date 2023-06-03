import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'

const Payment = ({setIsOpen , isOpen , isPrice}) => {
    const closeModal = ()=>{
        setIsOpen(false);
    }
    const LaunchRazorpay = () =>{
       let options = {
        // on which account to transfer money
        key: "rzp_test_BGmCKg4IsTY0Kp",
        // price will be concider into pesa so to conver it into rupees we have to
        // multiply with 100;
        amount: isPrice * 100,
        // in which currency you are dealing with
        currency : "INR",
        // what you want to show whome to make a payment 
        name: "book my show clone ",
        // description 
        description: "rental or movie ",
        // the image you want to show 
        image : "https://in.bmscdn.com/webin/common/icons/logo.svg",
        // if there is somthing i have to done after i complete my payment handler function do it for you 
        handler : ()=>{
            setIsOpen(false);
            alert("payment successfull ");
        },
        // color theam  what you want 
        theme : {color : "#FF0000"},
       };

       // we have to import an inbuiet function name razor pay from script we imported 
       // inside html file 
       // provide all the things which we want 
       let razorPay = window.Razorpay(options);

       // to open a new window 
       razorPay.open();

    }
  return (
    
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please make a payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      click on the below button to make a payment
                    </p>
                  </div>

                  <div className=" flex gap-3 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-crimson-300 px-4 py-2 text-sm font-medium text-white hover:bg-crimson-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-300 focus-visible:ring-offset-2"
                      onClick={LaunchRazorpay}
                    >
                      pay {isPrice}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      cancle payment!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Payment