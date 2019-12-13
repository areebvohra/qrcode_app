import _ from 'lodash';

export const isEmpty = (itm) => _.isEmpty(itm);

export const WORD_REGEX = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

export const NUM_REGEX = /^[0-9]+$/;