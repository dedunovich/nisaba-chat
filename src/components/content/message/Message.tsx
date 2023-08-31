import { ILocalMessage } from "src/types/message";
import { ReceivedMessage, SentMessage } from "./Message.styled";
import { FC } from "react";

interface MessageProps {
  message: ILocalMessage;
}

export const Message: FC<MessageProps> = ({ message }: MessageProps) => {
  if (message.text) {
    return message.isRequest ? (
      <SentMessage>{message.text}</SentMessage>
    ) : (
      <ReceivedMessage>{message.text}</ReceivedMessage>
    );
  }
};
