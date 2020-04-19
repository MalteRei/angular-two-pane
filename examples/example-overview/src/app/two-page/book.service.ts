import { Injectable } from '@angular/core';
import { Book } from './models/Book';
import { Page } from './models/Page';
import { Paragraph } from './models/Paragraph';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private Book = new Book('Introduction to dual-screen devices', [
    new Page('Introduction to dual-screen devices', []),
    new Page(undefined, [
      new Paragraph(undefined, 'Dual-screen devices are portable multi-posture devices with two symmetric screens that work together in unique ways to provide productivity in a flexible form factor.'),
      new Paragraph(undefined, 'With dual-screen devices such as Microsoft\'s Surface Neo and Surface Duo, people can get things done on-the-go faster than ever: take notes on one screen and review the full project proposal on the other while in transit; sit down at a table to write a thoughtful email using a software or hardware keyboard while waiting for lunch; and then watch a video, browse the web, or read a book as you get back to your life.'),
      new Paragraph(undefined, 'Although dual-screen devices unlock new possibilities for your apps, your existing apps will work as expected on the devices, and there are improvements that you will get without doing any work. This documentation will point those out, while also showing new ways to enhance your app experience by making your app aware of the dual-screen nature of the device.'),
      new Paragraph(undefined, 'While there are different dual-screen devices now in the market and more coming, we believe there can be a common way of approaching the design of apps for these devices. We hope this will help your app reach more devices without re-designing from scratch for every device.'),
      new Paragraph(undefined, 'In this article, we talk about common design patterns and concepts that are applicable regardless of the operating system you target or the development language you use. You will still need to create separate apps using applicable technologies and SDKs that you are able to deploy to Android, Windows, or both. For platform specific information about developing apps for dual-screen devices, see Develop for Android or Develop for Windows.'),
      new Paragraph(undefined, 'The technology is still evolving and our guidance here may change as we progress. Your feedback is welcome.')
    ]),
    new Page('Dual-screen overview', [
      new Paragraph(undefined, 'Dual-screen devices can come in a range of hardware and industrial design variations. The recently announced Surface Neo and Surface Duo are intended to help define the category, but other devices may come with larger displays or varying hinge designs. As you design your apps, keep in mind that you should avoid designing to the specifications of any specific devices available today.'),
      new Paragraph(undefined, 'All dual-screen devices can fold, flip, and rotate. Both screens can be used as displays, or one screen may act as a keyboard. The different form factors support a wide variety of activities and allow the user to fit the device to their situation. By taking advantage of the various postures with your app, you will help your users achieve more.'),
      new Paragraph(undefined, 'When the user launches an app, its core window opens maximized and occupies the full width and height of a single screen. Users can have multiple applications open at once this way, allowing for side-by-side use of apps and intuitive drag-and-drop scenarios.'),
      new Paragraph(undefined, 'An app can also appear across both screens, which is known as a spanned layout. By default, the app will act as if it is being displayed across a larger screen. You can modify your existing app layouts to accommodate the seam between the two screens, or you can go further and design your app using layout controls specifically created to take full advantage of dual-screen devices. This is discussed in more detail later in this article.'),
    ]),
    new Page('Embracing and improving existing features', [
      new Paragraph(undefined, 'There are many features that you may already take advantage of with your apps that will continue to work with little-to-no effort on dual-screen devices supported by Microsoft and will continue to provide a good app experience. We will cover those before discussing how to design your app specifically for dual-screen scenarios.'),
      new Paragraph('Responsive app layouts', 'If you design your app so that it uses responsive layouts, it will look great on every device, regardless of the device\'s screen size and orientation. Use existing layout techniques for the UI platform of your choice that automatically scale to fill the screen. If you have screen elements that depend on size and aspect ratio, use the APIs provided by your UI platform to adjust your layout when the size or aspect ratio changes.'),
      new Paragraph(undefined, 'Because your app runs on many different devices, you\'ve probably already developed it to handle various screen and window sizes, and it should continue to work seamlessly. However, keep in mind that you might need to account for new screen sizes and aspect ratios that are not typical for PCs and mobile devices, such as portrait (taller view), landscape (wider view), dual-portrait (double the width of portrait), and dual-landscape (double the height of landscape).'),
      new Paragraph('Consider all device orientations', 'We expect users to be creative in using dual-screen devices in the manner that works for them. This means your application might not always be used in the typical orientation; portrait for Android, or landscape for Windows. Consider supporting all orientations and screen configurations. For example, if your app is designed primarily for portrait orientation but supports a lot of text entry, users might be more likely to use it in landscape orientation on a dual-screen device, with the keyboard on the bottom screen.'),
      new Paragraph(undefined, 'Dual-screen layouts can provide a better environment for multi-tasking. You won\'t always know in what posture the user is going to hold the device; but knowing the potential postures lets you optimize your app for the postures that make the most sense for your app.'),
      new Paragraph(undefined, 'Our studies show that users are more comfortable typing or writing on a flat surface. If your app is heavily input oriented, like a note taking app, you can optimize it to be used in a landscape layout (if it\'s not already).'),
      new Paragraph('Support a variety of inputs', 'Many devices, including the new dual-screen devices, support a wide variety of inputs, including typing, touch, and pen. The flexibility of dual-screen devices lets a user quickly switch between postures and input modes to fit their task. To ensure a great user experience, make sure your app supports all available input types, so the user remains in control and can interact with your app in the way they prefer.'),
      new Paragraph('Drag-and-drop', 'Making sure your app supports drag-and-drop is another way to ensure a great user experience when using different types of input, not only for dual-screen devices, but also for all other device types.'),
      new Paragraph(undefined, 'Drag-and-drop is a feature you can already take advantage of. However, a dual-screen device that runs apps side-by-side especially lends itself to drag-and-drop interactions for a great app experience.'),
      new Paragraph(undefined, 'To enable drag-and-drop in your app, think of scenarios when users can directly manipulate text, links, images, or rich objects into and out of your app\'s experience, then:'),
      new Paragraph(undefined, '1. Anywhere you can cut, copy, and paste, enable drag-and-drop.'),
      new Paragraph(undefined, '2. Anywhere you can share content, consider enabling drag-and-drop.'),
      new Paragraph('Multi-instance for your app', 'Users may want to take advantage of the second screen to view different content from the same app. To enable this, consider supporting multi-instance, where multiple instances of your app run side-by-side.'),
      new Paragraph('Picture in picture experience for your media', 'If you are creating a media app that can benefit from continuing to play video in the foreground while another app is running, consider supporting picture-in-picture experiences. With more screen real-estate, this gives the user a chance to multi-task by watching the video and performing another task at the same time.'),
    ])
  ]);
  public get book() {
    return this.Book;
  }
  public set book(value) {
    this.Book = value;
  }

  private CurrentPageIndex = 0;

  public get currentPageIndex() {
    return this.CurrentPageIndex;
  }

  public currentPage() {
    return this.book.pages[this.CurrentPageIndex];
  }

  public nextPage() {
    if (this.hasNextPage()) {
      ++this.CurrentPageIndex;
    }
  }

  public previousPage() {
    if (this.hasPreviousPage()) {
      --this.CurrentPageIndex;
    }
  }

  public hasNextPage() {
    return this.CurrentPageIndex < this.book.pages.length - 1;
  }

  public hasPreviousPage() {
    return this.CurrentPageIndex > 0;
  }

  public bookLength(){
    return this.book.pages.length;
  }

  constructor() { }

}
