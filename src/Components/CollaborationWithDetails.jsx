import { useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Section from "./Section";

const CollaborationWithDetails = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <Section crosses>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={handleClickOutside}
      >
        <motion.div
          ref={modalRef}
          className="border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-2xl w-full mx-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <div className="max-h-[80vh] overflow-y-auto">
            <h2 className="h2 mb-4 text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text border-b border-n-6 pb-2">
              Seamless Team Collaboration
            </h2>

            <div className="space-y-6 text-n-4">
              <p className="body-2">
                Our collaboration system provides comprehensive solutions for
                remote and local teams:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3 p-4 bg-n-7 rounded-lg border border-transparent transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
                  <div className="text-n-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="body-1 mb-1 font-semibold">
                      Real-time Collaboration
                    </h3>
                    <p className="caption">
                      Co-edit documents with instant updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-n-7 rounded-lg border border-transparent transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
                  <div className="text-n-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="body-1 mb-1 font-semibold">
                      Task Management
                    </h3>
                    <p className="caption">Advanced Kanban boards</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-n-7 rounded-lg border border-transparent transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
                  <div className="text-n-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="body-1 mb-1 font-semibold">Security</h3>
                    <p className="caption">Enterprise-grade protection</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-n-7 rounded-lg border border-transparent transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
                  <div className="text-n-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12h6m-3-3v6m-9-3H3m3-3v6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="body-1 mb-1 font-semibold">
                      Custom Workflows
                    </h3>
                    <p className="caption">Automate your processes</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="body-1 font-semibold border-b border-n-6 pb-2">
                  Key Features:
                </h3>
                <ul className="list-disc pl-6 space-y-2 marker:text-n-4">
                  <li>Video conferencing with recording</li>
                  <li>Smart auto-save every 5 minutes</li>
                  <li>50+ supported file formats</li>
                  <li>Customizable workspaces</li>
                  <li>Role-based access control</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end border-t border-n-6 pt-4">
            <Button onClick={onClose}>Close</Button>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default CollaborationWithDetails;
