import { Selector } from 'testcafe'


fixture(`My first test cafe test`)
    .page('http://localhost:8080')

test('clicking thebutton should display hello testcafe', async t => {
    await t
        .expect(Selector('p').exists).notOk()
        .click('button')
        .expect(Selector('p').textContent).eql('Hello TestCafe!')
})