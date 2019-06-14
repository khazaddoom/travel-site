import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealOnScrollForFeatures = new RevealOnScroll($('.feature-item'), "85%");
var revealOnScrollForTestimonials = new RevealOnScroll($('.testimonial'), "85%");