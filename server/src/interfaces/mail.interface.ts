/* eslint-disable @typescript-eslint/ban-types */
export interface SendParamsMessage {
  From: {
    Email: string;
    Name?: string | undefined;
  };
  Sender?:
    | {
        Email: string;
        Name?: string | undefined;
      }
    | undefined;
  To: SendParamsRecipient[];
  Cc?: SendParamsRecipient[] | undefined;
  Bcc?: SendParamsRecipient[] | undefined;
  ReplyTo?: SendParamsRecipient | undefined;
  Variables?: object | undefined;
  TemplateID?: number | undefined;
  TemplateLanguage?: boolean | undefined;
  Subject?: string | undefined;
  TextPart?: string | undefined;
  HTMLPart?: string | undefined;
  MonitoringCategory?: string | undefined;
  URLTags?: string | undefined;
  CustomCampaign?: string | undefined;
  DeduplicateCampaign?: boolean | undefined;
  EventPayload?: string | undefined;
  CustomID?: string | undefined;
  Headers?: object | undefined;
  Attachments?: Attachment[] | undefined;
  InlinedAttachments?: InlinedAttachment[] | undefined;
}
export interface SendParamsRecipient {
  Email: string;
  Name?: string | undefined;
}
export interface Attachment {
  ContentType: string;
  Filename: string;
  Base64Content: string;
}
export interface InlinedAttachment extends Attachment {
  ContentID: string;
}

export interface mailRestorePwd {
  email: string;
  fullName: string;
  newPassword: string;
}
