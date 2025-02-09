import chai from 'chai';
import chaifs from 'chai-fs';
import chaiFiles from 'chai-files';
import chaiExecAsync from '@jsdevtools/chai-exec';
import { SOURCE, SOLUTION, ERROR_MSG } from './config.mjs';

import * as african from '../../../me/kmom02/african.mjs'
import * as european from '../../../me/kmom02/european.mjs'
import * as american from '../../../me/kmom02/american.mjs'
import * as report from '../../../me/kmom02/report.mjs'
import * as helpers from '../../../me/kmom02/helpers.mjs'
// import * as european from `${SOURCE}/${KMOM}/europe.mjs`
// import * as american from `${SOURCE}/${KMOM}/american.mjs`
// const EXERCISE = 'glacier'

chai.use(chaiExecAsync);
chai.use(chaiFiles);

// chai.config.showDiff = false;
// chai.config.includeStack = false;
// chai.config.truncateThreshold = 0;

const file = chaiFiles.file;
const expect = chai.expect;

describe('Testsuite for KMOM02', () => {
    let americanAnimals;
    let africanAnimals;
    let europeanAnimals;


    describe("Modules", () => {

        before(function () {
            chai.config.includeStack = false;
        });

        beforeEach(function() {
            americanAnimals = helpers.allAnimals("america")
            africanAnimals = helpers.allAnimals("africa")
            europeanAnimals = helpers.allAnimals("europe")
        })

        describe("all", () => {
            it('should return an array of american animals', (done) => {
                expect(americanAnimals).to.have.members([
                    'Florida panther',
                    'Lesser prairie chicken',
                    "Devil's Hole pupfish",
                    "Bryde's whale",
                    'North Atlantic right whale',
                    'Monarch butterfly',
                    'Delta Smelt',
                    'Giant sea bass',
                    "Franklin's bumble bee"
                ]);
                done();
            });

            it('should return an array of african animals', (done) => {
                expect(africanAnimals).to.have.members([
                  'Ethiopian wolf',
                  'Pangolin',
                  'Black rhino',
                  'White rhino',
                  'Mountain gorilla',
                  'African wild dog',
                  'African penguin',
                  'Giraffe',
                  'Hooded vulture',
                  'Chimpanzee'
                ]);
                done();
            });

            it('should return an array of european animals', (done) => {
                expect(europeanAnimals).to.have.members([
                    'Hooded seal',
                    'Blue whale',
                    'Polar bear',
                    'Golden eagle',
                    'Lynx',
                    'Crayfish',
                    'Amazon ant',
                    'European mink',
                    'Gerfalcon',
                    'Long-fingered bat'
                ]);
                done();
            });

        });

        describe("random", () => {

            it('should return a random animal (america)', (done) => {
                const randAnim = helpers.getRandomAnimal(americanAnimals)

                expect(americanAnimals).to.include(randAnim);
                done();
            });

            it('should return a random animal (africa)', (done) => {
                const randAnim = helpers.getRandomAnimal(africanAnimals)

                expect(africanAnimals).to.include(randAnim);
                done();
            });

            it('should return a random animal (europe)', (done) => {
                const randAnim = helpers.getRandomAnimal(europeanAnimals)

                expect(europeanAnimals).to.include(randAnim);
                done();
            });
        });

        describe("add", () => {

            it('should contain the added super animal (america)', (done) => {
                helpers.addAnimal(americanAnimals, 'capybara')

                expect(americanAnimals).to.include('capybara');
                done();
            });

            it('should contain the added super animal (africa)', (done) => {
                helpers.addAnimal(africanAnimals, 'capybara')

                expect(africanAnimals).to.include('capybara');
                done();
            });

            it('should contain the added super animal (europe)', (done) => {
                helpers.addAnimal(europeanAnimals, 'capybara')

                expect(europeanAnimals).to.include('capybara');
                done();
            });
        });

        describe("remove", () => {
            it('should not contain the removed animal (america)', (done) => {
                let msg = helpers.removeAnimal(americanAnimals, 'Delta Smelt')

                expect(americanAnimals).to.not.include('Delta Smelt');
                expect(msg).to.equal('Removed: Delta Smelt');
                done();
            });

            it('should not contain the removed animal (africa)', (done) => {
                let msg = helpers.removeAnimal(africanAnimals, 'Pangolin')

                expect(africanAnimals).to.not.include('Pangolin');
                expect(msg).to.equal('Removed: Pangolin');
                done();
            });

            it('should not contain the removed animal (europe)', (done) => {
                let msg = helpers.removeAnimal(europeanAnimals, 'Polar bear')

                expect(europeanAnimals).to.not.include('Polar bear');
                expect(msg).to.equal('Removed: Polar bear');
                done();
            });
        });

        describe("remove (non existent animal)", () => {
            it('should give correct feedback (america)', (done) => {
                let msg = helpers.removeAnimal(americanAnimals, 'Andreas')

                expect(msg).to.equal('No "Andreas" in array.');
                done();
            });

            it('should give correct feedback (africa)', (done) => {
                let msg = helpers.removeAnimal(africanAnimals, 'Emil')

                expect(msg).to.equal('No "Emil" in array.');
                done();
            });

            it('should give correct feedback (europe)', (done) => {
                let msg = helpers.removeAnimal(europeanAnimals, 'Mikael')

                expect(msg).to.equal('No "Mikael" in array.');
                done();
            });
        });

        describe("prettyPrint", () => {
            it('should match output (america)', (done) => {
                const msg = report.prettyPrint('American', americanAnimals)

                expect(msg).to.equal(`--- REPORT ---
American animals

* Florida panther
* Lesser prairie chicken
* Devil's Hole pupfish
* Bryde's whale
* North Atlantic right whale
* Monarch butterfly
* Giant sea bass
* Franklin's bumble bee
* capybara
`);
                done();
            });

            it('should match output (africa)', (done) => {
                const msg = report.prettyPrint('African', africanAnimals)

                expect(msg).to.equal(`--- REPORT ---
African animals

* Ethiopian wolf
* Black rhino
* White rhino
* Mountain gorilla
* African wild dog
* African penguin
* Giraffe
* Hooded vulture
* Chimpanzee
* capybara
`);
                done();
            });

            it('should match output (europe)', (done) => {
                const msg = report.prettyPrint('European', europeanAnimals)

                expect(msg).to.equal(`--- REPORT ---
European animals

* Hooded seal
* Blue whale
* Golden eagle
* Lynx
* Crayfish
* Amazon ant
* European mink
* Gerfalcon
* Long-fingered bat
* capybara
`);
                done();
            });
        });

        describe("fixFirstLetter", () => {

            it('should make first letter uppercase (america)', (done) => {
                let fixed = report.fixFirstLetter(americanAnimals)

                expect(fixed).to.include('Capybara');
                done();
            });

            it('should make first letter uppercase (africa)', (done) => {
                let fixed = report.fixFirstLetter(africanAnimals)

                expect(fixed).to.include('Capybara');
                done();
            });

            it('should make first letter uppercase (europe)', (done) => {
                let fixed = report.fixFirstLetter(europeanAnimals)

                expect(fixed).to.include('Capybara');
                done();
            });


        });

        describe("sort", () => {
            it('should sort the array', (done) => {
                report.sortAnimals(americanAnimals)

                expect(americanAnimals).to.have.ordered.members([
                  "Bryde's whale",
                  "Devil's Hole pupfish",
                  'Florida panther',
                  "Franklin's bumble bee",
                  'Giant sea bass',
                  'Lesser prairie chicken',
                  'Monarch butterfly',
                  'North Atlantic right whale',
                  'capybara'
                ]);
                done();
            });
        });

        describe("filter", () => {
            it('should filter out animals with more than 10 letters', (done) => {
                let filtered = report.filterAnimals([americanAnimals, africanAnimals, europeanAnimals], 10)

                expect(filtered).to.have.members([
                        'capybara', 'Black rhino',
                        'White rhino', 'Giraffe',
                        'Chimpanzee',  'capybara',
                        'Hooded seal', 'Blue whale',
                        'Lynx',        'Crayfish',
                        'Amazon ant',  'Gerfalcon',
                        'capybara'
                    ]
                );
                done();
            });
        });

        // describe("(OPTIONAL) EXTRA ASSIGNMENT: sortAnimalsExtra", () => {
        //     it('should sort animals regardless upper/lowercase', (done) => {
        //         report.sortAnimalsExtra(europeanAnimals)
        //         expect(europeanAnimals).to.have.ordered.members([
        //             'Amazon ant',
        //             'Blue whale',
        //             'capybara',
        //             'Crayfish',
        //             'European mink',
        //             'Gerfalcon',
        //             'Golden eagle',
        //             'Hooded seal',
        //             'Long-fingered bat',
        //             'Lynx'
        //             ]
        //         );
        //         done();
        //     });
        // });
    });



// { prettyPrint, fixFirstLetter, sortAnimals, sortAnimalsExtra, filterAnimals }


});
