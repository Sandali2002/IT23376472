import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara yanavaa.');
  await page.getByText('මම ගෙදර යනවා.').click();
});
test('Pos_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata kohomadha?');
  await page.getByText('ඔයාට කොහොමද?').click();
});
test('Pos_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama iiyee gedhara giyaa.');
  await page.getByText('මම ඊයේ ගෙදර ගියා.').click();
});
test('Pos_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta enavaa.');
  await page.getByText('අපි හෙට එනවා.').click();
});
test('Pos_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vahaama enna.');
  await page.getByText('වහාම එන්න.').click();
});
test('Pos_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama ehema karanne naehae.');
  await page.getByText('මම එහෙම කරන්නේ නැහැ.').click();
});
test('Pos_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kaeema kanna yanavaa saha passe chithrapatayak balanavaa.');
  await page.getByText('අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයක් බලනවා.').click();
});
test('Pos_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa enavaanam mama balan innavaa.');
  await page.getByText('ඔයා එනවානම් මම බලන් ඉන්නවා.').click();
});
test('Pos_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa mata podi udhavvak karanna puluvandha?');
  await page.getByText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද?').click();
});
test('Pos_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan supiri.');
  await page.getByText('එල මචන් සුපිරි.').click();
});
test('Pos_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaa');
  await page.getByText('මමගෙදරයනවා').click();
});
test('Pos_Fun_0012 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari.');
  await page.getByText('හරි හරි.').click();
});
test('Pos_Fun_0013 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Zoom meeting ekak thiyennee.');
  await page.getByText('Zoom meeting එකක් තියෙන්නේ.').click();
});
test('Pos_Fun_0014 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Documents tika attach karalaa mata email ekak evanna.');
  await page.getByText('Documents ටික attach කරලා මට email එකක් එවන්න.').click();
});
test('Pos_Fun_0015 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Rs.5343 මට ගෙවන්න තියෙනවා.');
  await page.getByText('Rs.5343 මට ගෙවන්න තියෙනවා.').click();
});
test('Pos_Fun_0016 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('7.30 AM venakam innavaa.');
  await page.getByText('7.30 AM වෙනකම් ඉන්නවා.').click();
});
test('Pos_Fun_0017 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api iilaga sathiyee Kandy yamu.');
  await page.getByText('අපි ඊලග සතියේ kandy යමු.').click();
});
test('Pos_Fun_0018 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api yamu.');
  await page.getByText('අපි යමු.').click();
});
test('Pos_Fun_0019 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama dhaen vaeda karanavaa.');
  await page.getByText('මම දැන් වැඩ කරනවා.').click();
});
test('Pos_Fun_0020 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata baya hithenavaa.');
  await page.getByText('මට බය හිතෙනවා.').click();
});
test('Pos_Fun_0021 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama pansal yanavaa.');
  await page.getByText('මම පන්සල් යනවා.').click();
});
test('Pos_Fun_0022 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka karanna baehae.');
  await page.getByText('මට ඒක කරන්න බැහැ.').click();
});
test('Pos_Fun_0023 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('puluvannam mata eeka evanna.');
  await page.getByText('පුලුවන්නම් මට ඒක එවන්න.').click();
});
test('Pos_Fun_0024 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('dhitvaa suli kunaatuva samaga aethu vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana adhikaariya sathu maarga kotas vinaashayata pathva aethi athara ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vava bava sadhahan kaLeeya.');
  await page.getByText('දිට්වා සුලි කුනාටුව සමග ඇතු වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අදිකාරිය සතු මාර්ග කොටස් විනාශයට පත්ව ඇති අතර එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වව බව සදහන් කළේය.').click();
});

test('Neg_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(' No output generated.');
  await page.getByText('No output generated.').click();
});
test('Neg_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('@@@@@');
  await page.getByText('@@@@@').click();
});
test('Neg_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('asdjklqwe');
  await page.getByText('අස්ඩ්ජ්ක්ලqwඑ').click();
});
test('Neg_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama   gedhara    yanavaa');
  await page.getByText('මම   ගෙදර    යනවා').click();
});
test('Neg_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama #$% gedhara');
  await page.getByText('මම #$% ගෙදර').click();
});
test('Neg_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('I am going home today');
  await page.getByText('ඉ am going home today').click();
});
test('Neg_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaaharihariharihariharihari');
  await page.getByText('මමගෙදරයනවාහරිහරිහරිහරිහරිහරි').click();
});
test('Neg_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama yanavaa giyaa.');
  await page.getByText('මම යනවා ගියා.').click();
});
test('Neg_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara');
  await page.getByText('මම ගෙදර').click();
});
test('Neg_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adoo machan ela kiri bQQ supiri.');
  await page.getByText('අඩෝ මචන් එල කිරි බං සුපිරි.').click();
});
test('Pos_UI_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara yanavaa.');
  await page.getByText('මම ගෙදර යනවා.').click();
});



