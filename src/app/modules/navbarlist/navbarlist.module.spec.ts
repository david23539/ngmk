import { NavbarListModule } from './navbarlist.module';

describe('ListModule', () => {
  let navbarListModule: NavbarListModule;

  beforeEach(() => {
    navbarListModule = new NavbarListModule();
  });

  it('should create an instance', () => {
    expect(navbarListModule).toBeTruthy();
  });
});
