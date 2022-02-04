const { upgrades } = require('hardhat');

async function main() {
    // const [ admin ] = await ethers.getSigners();

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
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });