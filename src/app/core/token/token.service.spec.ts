import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);

    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('hasToken', () => {
    it('should return true if has token', () => {
      localStorage.setItem('token', 'TOKEN_TEST');
      expect(service.hasToken('token')).toBe(true);
    });

    it('should return false if do not have token', () => {
      expect(service.hasToken('token')).toBe(false);
    });
  });

  describe('getToken', () => {
    it('should return token', () => {
      localStorage.setItem('token', 'TOKEN_TEST');
      expect(service.getToken('token')).toEqual('TOKEN_TEST');
    });

    it('should return null', () => {
      expect(service.getToken('token')).toEqual(null);
    });
  });

  describe('setToken', () => {
    it('should set token', () => {
      service.setToken('token', 'TOKEN_TEST');
      expect(localStorage.getItem('token')).toEqual('TOKEN_TEST');
    });
  });

  describe('removeToken', () => {
    it('should remove token', () => {
      localStorage.setItem('token', 'TOKEN_TEST');
      service.removeToken('token');
      expect(localStorage.getItem('token')).toEqual(null);
    });
  });
});
