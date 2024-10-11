export interface IRequest {
  url: string;
  value: string;
}

export interface IRequestState {
  url: string;
  error: string;
  id: string;
  value?: string;
}

export interface CreateRequestMainComponentProps {
  onRequestSubmit: (request: IRequest[]) => void;
}

export interface CreateRequestListProps {
  urlData: IRequestState;
  deleteItem: () => void;
  updateItem: (d: IRequestState) => void;
  canDelete: boolean;
  label: string;
  autoFocus?: boolean;
}

export interface AddUrlButtonProps {
  addUrl: () => void;
  items: IRequestState[];
}
