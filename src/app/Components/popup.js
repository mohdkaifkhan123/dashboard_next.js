// // components/PaymentMethodModal.js
// export default function PaymentMethodModal({ isOpen, onClose }) {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//             <div className="bg-white flex flex-col gap-5 rounded-lg shadow-lg max-w-md w-3/4  md:w-full p-6">
//                 <div className="flex gap-y-3 justify-between items-start">
//                     <div className="flex flex-col gap-y-4">
//                         <h2 className="text-lg font-bold flex gap-x-3">
//                             Visa•••7019
//                             <img className="w-fit " src="VisaLogo.png" />
//                         </h2>
//                         <div>
//                             <p className="md:text-sm text-xs ">Expiry date</p>
//                             <p className="md:text-md text-sm font-bold">10/2026</p>
//                         </div>
//                         <div>
//                             <p className="md:text-sm text-xs ">Country</p>
//                             <p className="md:text-md text-sm font-bold">Korea, Republic of (South Korea)</p>
//                         </div>
//                     </div>
//                     <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//                         ✕
//                     </button>
//                 </div>

//                 <div className="mt-6 space-y-4">
//                     <button className="flex gap-x-2 text-xs font-semibold md:text-base items-center ">
//                         <img src="Pencil Icon.png" /> Edit
//                     </button>
//                     <button className="flex justify-left  gap-x-3 text-xs md:text-base items-top ">
//                         <img src="Delete.png" className="mt-1" />
//                         <div className="flex flex-col items-top">
//                             <p className="text-left h-fit font-semibold">Remove payment method</p>
//                             <p className="text-xs text-gray-400 text-justify">
//                                 You cannot delete your default payment method. Choose another payment method as default to delete this one.
//                             </p>
//                         </div>
//                     </button>
//                 </div>

//                 <p className="text-xs text-gray-500 mt-20">
//                     This payment method will be charged when users order rides, meals, or other Uber products on your Uber for Business account.
//                 </p>
//             </div>
//         </div>
//     );
// }
