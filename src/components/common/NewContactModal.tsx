import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

interface NewContactModalProps {
  showModal: boolean;
  closeModal: () => void;
  addNewPrimaryContact: (param: string) => void;
}

const NewContactModal: React.FC<NewContactModalProps> = ({
  showModal,
  closeModal,
  addNewPrimaryContact,
}) => {
  const [contact, setContact] = useState<string>("");

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 p-6 border-b border-gray-500"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2 p-6">
                    <div>
                      <label>Primary Contact</label>
                      <input
                        className="w-full p-2 outline-offset-0 outline-pacific-blue border border-gray-500 rounded"
                        placeholder="Enter contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-500 p-6 flex justify-end items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-pacific-blue px-4 py-2 text-sm font-medium text-pacific-blue"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-pacific-blue px-4 py-2 text-sm font-medium text-white"
                      onClick={() => addNewPrimaryContact(contact)}
                    >
                      Add
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewContactModal;
