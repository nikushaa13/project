export interface HotelModel {
  id: number,
  title: string,
  price: number,
  area: string,
  description: string,
  imageUrl: string,
  secondImage: string,
  thirdImage: string,
  fourthImage: string,
  fifthImage: string,
  actions: string,
  isHovered: boolean;
  owner: string;
  category: string,
  categoryIcon: string,
  currentImageIndex: number;

}
