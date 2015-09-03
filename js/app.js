/**
 * Created by Goran on 9/1/2015.
 */

import LoggerController from '../controller/loggerController.js';
import MoviesController from '../controller/moviesController.js';
import CartController from '../controller/cartController.js';
export function init(){
    LoggerController.loggerController();
    MoviesController.moviesController();
    CartController.cartController();
}