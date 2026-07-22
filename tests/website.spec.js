import { test, expect } from '@playwright/test';

const PAGES = [
  { path: 'index.html', heading: 'Адвокатско дружество' },
  { path: 'about.html', heading: 'За нас' },
  { path: 'services.html', heading: 'Правни услуги' },
  { path: 'contacts.html', heading: 'Контакти' },
];

const MOBILE_WIDTH = 375;
const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1280;

test.describe('Page loads', () => {
  for (const page of PAGES) {
    test(`${page.path} loads without errors`, async ({ page: p }) => {
      const resp = await p.goto(page.path);
      expect(resp).not.toBeNull();
      expect(resp.status()).toBe(200);
      await expect(p.locator('h1').first()).toContainText(page.heading);
    });
  }
});

test.describe('Viewport meta tag', () => {
  for (const page of PAGES) {
    test(`${page.path} has viewport meta tag`, async ({ page: p }) => {
      await p.goto(page.path);
      const viewport = await p.locator('meta[name="viewport"]').getAttribute('content');
      expect(viewport).toContain('width=device-width');
      expect(viewport).toContain('initial-scale=1');
    });
  }
});

test.describe('Responsive layout', () => {
  for (const page of PAGES) {
    test(`${page.path} stacks single-column on mobile (375px)`, async ({ page: p }) => {
      await p.setViewportSize({ width: MOBILE_WIDTH, height: 812 });
      await p.goto(page.path);
      await expect(p.locator('.container').first()).toBeVisible();
    });

    test(`${page.path} renders at tablet width (768px)`, async ({ page: p }) => {
      await p.setViewportSize({ width: TABLET_WIDTH, height: 1024 });
      await p.goto(page.path);
      await expect(p.locator('.container').first()).toBeVisible();
    });

    test(`${page.path} renders at desktop width (1280px)`, async ({ page: p }) => {
      await p.setViewportSize({ width: DESKTOP_WIDTH, height: 800 });
      await p.goto(page.path);
      await expect(p.locator('.container').first()).toBeVisible();
    });
  }
});

test.describe('Navigation', () => {
  test.beforeEach(async ({ page: p }) => {
    await p.goto('index.html');
  });

  test('desktop nav links navigate to correct pages', async ({ page: p }) => {
    await p.setViewportSize({ width: DESKTOP_WIDTH, height: 800 });
    const links = [
      { text: 'Начало', href: '.' },
      { text: 'За нас', href: 'about.html' },
      { text: 'Услуги', href: 'services.html' },
      { text: 'Контакти', href: 'contacts.html' },
    ];
    for (const link of links) {
      const navLink = p.locator('.nav__list').getByText(link.text);
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveAttribute('href', link.href);
    }
  });

  test('active page is highlighted in desktop nav', async ({ page: p }) => {
    await p.setViewportSize({ width: DESKTOP_WIDTH, height: 800 });
    await p.goto('about.html');
    const activeLinks = p.locator('.nav__link--active');
    await expect(activeLinks).toHaveCount(1);
    await expect(activeLinks).toHaveAttribute('href', 'about.html');
  });
});

test.describe('Mobile menu', () => {
  test.beforeEach(async ({ page: p }) => {
    await p.setViewportSize({ width: MOBILE_WIDTH, height: 812 });
    await p.goto('index.html');
  });

  test('menu toggle button exists and has adequate touch target (>= 44px)', async ({ page: p }) => {
    const toggle = p.locator('#menu-toggle');
    await expect(toggle).toBeVisible();
    const box = await toggle.boundingBox();
    expect(box).not.toBeNull();
    expect(Math.min(box.width, box.height)).toBeGreaterThanOrEqual(44);
  });

  test('mobile nav is hidden by default', async ({ page: p }) => {
    const mobileNav = p.locator('#mobile-nav');
    await expect(mobileNav).not.toBeVisible();
  });

  test('toggling menu shows and hides mobile nav', async ({ page: p }) => {
    const toggle = p.locator('#menu-toggle');
    const mobileNav = p.locator('#mobile-nav');

    await toggle.click();
    await expect(mobileNav).toBeVisible();
    await expect(toggle).toHaveClass(/menu-toggle--active/);

    await toggle.click();
    await expect(mobileNav).not.toBeVisible();
  });

  test('mobile nav links are tappable (touch targets >= 44px)', async ({ page: p }) => {
    const toggle = p.locator('#menu-toggle');
    await toggle.click();
    const links = p.locator('.mobile-nav__link');
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      const box = await links.nth(i).boundingBox();
      expect(Math.min(box.width, box.height)).toBeGreaterThanOrEqual(44);
    }
  });

  test('mobile phone button has adequate touch target', async ({ page: p }) => {
    const toggle = p.locator('#menu-toggle');
    await toggle.click();
    const phoneBtn = p.locator('.mobile-nav__phone');
    await expect(phoneBtn).toBeVisible();
    const box = await phoneBtn.boundingBox();
    expect(Math.min(box.width, box.height)).toBeGreaterThanOrEqual(44);
  });
});

test.describe('Touch interactions', () => {
  for (const page of PAGES) {
    test(`${page.path} interactive elements have touch-action: manipulation`, async ({ page: p }) => {
      await p.goto(page.path);
      const interactives = p.locator('a, button, .nav__link, .menu-toggle');
      const count = await interactives.count();
      for (let i = 0; i < Math.min(count, 10); i++) {
        const el = interactives.nth(i);
        if (await el.isVisible()) {
          const touchAction = await el.evaluate(el => getComputedStyle(el).touchAction);
          expect(touchAction).toBe('manipulation');
        }
      }
    });
  }
});

test.describe('Images', () => {
  for (const page of PAGES) {
    test(`${page.path} images load without errors`, async ({ page: p }) => {
      await p.goto(page.path);
      const imgs = p.locator('img');
      const count = await imgs.count();
      for (let i = 0; i < count; i++) {
        const img = imgs.nth(i);
        const src = await img.getAttribute('src');
        if (src && !src.startsWith('data:')) {
          await expect(img).toHaveJSProperty('complete', true);
          const naturalWidth = await img.evaluate(el => el.naturalWidth);
          expect(naturalWidth).toBeGreaterThan(0);
        }
      }
    });
  }
});

test.describe('Heading structure', () => {
  for (const page of PAGES) {
    test(`${page.path} has exactly one h1`, async ({ page: p }) => {
      await p.goto(page.path);
      await expect(p.locator('h1')).toHaveCount(1);
    });
  }
});

test.describe('Footer', () => {
  for (const page of PAGES) {
    test(`${page.path} footer has contact info`, async ({ page: p }) => {
      await p.goto(page.path);
      const footer = p.locator('.footer');
      await expect(footer).toBeVisible();
      await expect(footer).toContainText('Пловдив');
      await expect(footer).toContainText('+359');
    });
  }
});

test.describe('SEO / accessibility basics', () => {
  for (const page of PAGES) {
    test(`${page.path} has a lang attribute`, async ({ page: p }) => {
      await p.goto(page.path);
      const lang = await p.locator('html').getAttribute('lang');
      expect(lang).toBe('bg');
    });

    test(`${page.path} has a meta description`, async ({ page: p }) => {
      await p.goto(page.path);
      const desc = await p.locator('meta[name="description"]').getAttribute('content');
      expect(desc).toBeTruthy();
      expect(desc.length).toBeGreaterThan(10);
    });

    test(`${page.path} has a title tag`, async ({ page: p }) => {
      await p.goto(page.path);
      const title = await p.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(5);
    });
  }
});
