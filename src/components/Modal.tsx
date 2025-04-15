import * as Dialog from '@radix-ui/react-dialog';
import { X, CheckCircle2, ArrowRight, Shield, Clock } from 'lucide-react';
import type { Package } from '@/types';
import { contact } from '@/config/contact';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
}

export const Modal = ({ isOpen, onClose, selectedPackage }: ModalProps) => {
  if (!selectedPackage) return null;

  const whatsappMessage = `Hallo, ich interessiere mich für das folgende Paket:

${selectedPackage.title}
Preis: ${selectedPackage.price}${selectedPackage.originalPrice ? ` (statt ${selectedPackage.originalPrice})` : ''}

Können wir einen Termin für die Fahrstunden vereinbaren?`;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-out]" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[95%] max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-0 duration-200 rounded-2xl overflow-hidden outline-none data-[state=open]:animate-[modal-open_300ms_ease-out] data-[state=closed]:animate-[modal-close_200ms_ease-out]">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white">
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-2xl font-bold tracking-tight">
                {selectedPackage.title}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="rounded-full p-2 hover:bg-white/10 transition-colors"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </Dialog.Close>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Price with emphasis */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-blue-900">{selectedPackage.price}</span>
              {selectedPackage.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{selectedPackage.originalPrice}</span>
              )}
            </div>

            {/* Features with checkmarks */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-gray-900">Enthaltene Leistungen:</h4>
              <ul className="space-y-3">
                {selectedPackage.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:from-green-700 hover:to-green-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Jetzt Kontaktieren</span>
              </a>
              <Dialog.Close asChild>
                <button
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={onClose}
                >
                  Weitere Pakete ansehen
                </button>
              </Dialog.Close>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>Sichere Buchung</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Schnelle Antwort</span>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}; 