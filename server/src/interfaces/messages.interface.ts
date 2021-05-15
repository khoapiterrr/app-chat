export interface Messages {
  _id: string;
  sender: string;
  receiver: string;
  conversationType: string;
  type: string;
  message: string;
  images: string[];
  files: FileObject[];
  conversationId: string;
}
export interface FileObject {
  name: string;
  path: string;
}
