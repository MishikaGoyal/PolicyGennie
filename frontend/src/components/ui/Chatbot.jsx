import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "wk9Dc5rLLmSBNCjBa2SVz",
      domain: "www.chatbase.co",
    };

    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', "wk9Dc5rLLmSBNCjBa2SVz");
    script.setAttribute('domain', "www.chatbase.co");
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;
