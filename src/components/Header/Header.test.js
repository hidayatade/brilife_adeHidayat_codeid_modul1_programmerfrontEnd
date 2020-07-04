import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';


const onMenuClickFn = jest.fn();

describe('Header', () => {

    let wrapper;


    it('menu should have been click', () => {
        expect (wrapper.find('h6#title-label')).toHavetext('Web Application');
    });

    it('menu should have been clicked', () => {
        wrapper.find('button#menu-button').simulate('click');
        expect(onMenuClickFn).toHaveBeenCalled();
    });
    
    it('menu should have been clicked twice', () => {
        wrapper.find('button#menu-button')
        .simulate('click')
        .simulate('click');
        expect(onMenuClickFn).toHaveBeenCalledTimes(3);
    });
});