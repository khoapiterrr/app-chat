export interface Messages {
  _id: string;
  sender: string;
  receiver: string;
  conversationType: string;
  type: string;
  message: string;
  images: string[] | undefined;
  files: FileObject[] | undefined;
  conversationId: string;
}
export interface FileObject {
  name: string | undefined;
  path: string | undefined;
}
