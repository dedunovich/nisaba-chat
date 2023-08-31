import Head from "next/head";
import { ChatView } from "src/view/ChatView";

export default function ChatPage() {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <main>
        <ChatView />
      </main>
    </>
  );
}
