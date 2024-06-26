export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
  };
  likes: number;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface ModalData {
  imageSrc: string;
  imageAltDescription: string;
  imageDescription: string;
  imageAuthor: string;
  imageLikes: number;
}
