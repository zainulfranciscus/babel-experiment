import $ from 'jquery';
import {Person} from './person';

var Tyler = new Person("Tyler");
$('body').html(Tyler.greet());