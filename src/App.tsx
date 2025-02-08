import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { LogSnag } from "@logsnag/node";

const logsnag = new LogSnag({
  token: "LOGSNAG_TOKEN",
  project: "PROJECT_NAME",
});

const track = async () => {
  await logsnag.track({
    channel: "yes",
    event: "Will you be my girlfriend?",
    description: "She said yes!",
    icon: "💖",
    notify: true,
  });
};

const sendEmail = async (recipients: string[], subject: string, text: string) => {
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipients, subject, text }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

function App() {
  const [sheWantsToBeMyValentine, setSheWantsToBeMyValentine] = useState(false);
  const { width, height } = useWindowSize();

  const handleYesClick = async () => {
    setSheWantsToBeMyValentine(true);
    await track();
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipientEmails: ["ofemibanjo@gmail.com", "banjoluwafemi@gmail.com"],
          subject: "She Said YES! 💖",
          message: "She accepted the proposal! 🎉",
        }),
      });
  
      if (!response.ok) throw new Error("Failed to send email");
  
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };
  

  return (
    <>
      {sheWantsToBeMyValentine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Confetti width={width} height={height} />
          <div className="fixed top-0 left-0 w-full h-full bg-[#FFC5D3] flex flex-col items-center justify-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-white text-4xl font-bold"
            >
              Yayyyyyyy!!!!!
            </motion.h1>
            <img
              src="/character/yayyyy.png"
              alt=""
              className="w-40 animate-bounce"
            />
          </div>
        </motion.div>
      )}
      {!sheWantsToBeMyValentine && (
        <div className="bg-[#FFC5D3] min-h-screen text-white p-5 flex flex-col items-center justify-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-josefin text-4xl font-bold"
          >
            Angel, will you be my girlfriend?
          </motion.div>
          <button
            onClick={handleYesClick}
            className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-10 font-semibold"
          >
            Yes
          </button>
        </div>
      )}
    </>
  );
}

export default App;