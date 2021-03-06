export interface ICarousel {
	children: React.ReactNode[];
	infinity?: boolean;
	buttonPrev?: React.ReactNode;
	buttonNext?: React.ReactNode;
	withDots?: boolean;
	withCounters?: boolean;
	callback?: any;
	initialSlide?: number;
}
