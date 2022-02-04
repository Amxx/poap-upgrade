const { upgrades } = require('hardhat');

it('storage layout consistency', async function () {
    const proxy = await ethers.getContractFactory('Poap').then(factory => upgrades.deployProxy(
        factory,
        [ "Poap", "POAP", "somebase/", [] ],
        { initializer: 'initialize(string,string,string,address[])' },
    ));

    const proxy2 = await ethers.getContractFactory('PoapV2').then(factory => upgrades.upgradeProxy(
        proxy,
        factory,
        {},
    ));
});
