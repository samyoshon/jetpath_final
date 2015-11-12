var Job = require('../models/Job.js');
var User = require('../models/User.js');

exports.seed = function seedJob() {

    Job.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
			Job.create({name: 'Korea Academy',
				title: 'Best job in Korea',
				description: 'We are an academy located in the bustling city of Seoul!',
				country: 'South Korea',
				city: 'Seoul',
				compensation: [{low: '2,300 Won', high: '2,500 Won/mo'}],
				benefits: 'Vacation',
				qualifications: 'Qualifications go here',
				apply: 'Please send your resume to info@KoreaAcademy.com'
			});
			Job.create({name: 'Shanghai Academy',
				title: 'Best job in China',
				description: 'We are an academy located in the bustling city of Shanghai!',
				country: 'China',
				city: 'Shanghai',
				compensation: [{low: '12,300 RMB', high: '12,500 RMB/mo'}],
				benefits: 'Vacation',
				qualifications: 'Qualifications go here',
				apply: 'Please send your resume to info@ShanghaiAcademy.com'
			});
			Job.create({name: 'Bangkok Academy',
				title: 'Best job in Thailand',
				description: 'We are an academy located in the bustling city of Bangkok!',
				country: 'Thailand',
				city: 'Bangkok',
				compensation: [{low: '2,300 Baht', high: '2,500 Baht/mo'}],
				benefits: 'Vacation',
				qualifications: 'Qualifications go here',
				apply: 'Please send your resume to info@BangkokAcademy.com'
			});
			Job.create({name: 'Hoseo University',
				title: 'Faculty Position at Hoseo University in Asan',
				description: 'College of General Education: Full-time Instructor for English (non-tenure track)',
				country: 'South Korea',
				city: 'Asan',
				compensation: [{low: '30,507,000 won/year', high: '30,507,000 won/year'}],
				benefits: 'Vacation',
				qualifications: 'Masters Degree in any field (English or TESOL preferred)',
				apply: 'Please send your resume and photo to info@HoseoUniversity.com'
			});
			Job.create({name: 'Web International English Shanghai',
				title: 'Web International English was established in 1998 with the aim of providing learners with a better and more effective way of learning English.',
				description: 'We are currently looking for enthusiastic and experienced ESL teachers in one of our nineteen locations in the greater Shanghai area. Most of our centers are located in the city center. Only a few are on the fringes of the city (45 minutes from city center) though are located near a Metro station.',
				country: 'China',
				city: 'Shanghai',
				compensation: [{low: '14,500 RMB', high: '17,500 RMB'}],
				benefits: '5 days paid holidays + 11 days National holidays',
				qualifications: 'Native speaker of English from the following countries: (US, Canada, UK, Ireland, Australia, New Zealand or South Africa)',
				apply: 'To apply for this position, please e-mail marry.liao@webi.com.cn'
			});
			Job.create({name: 'China Immersion',
				title: 'ESL Teachers for Language Schools in Jiangsu and Tianjin 10,500 RMB/mo',
				description: 'US English - Nanjing, Jiangsu Province. 3-18 yo students. 20 class hours, 15 office hours per week. 10,500 RMB/mo',
				country: 'China',
				city: 'Jiangsu',
				compensation: [{low: '10,500 RMB', high: '10,500 RMB/mo'}],
				benefits: 'Housing, Contract completion bonus, Z work visa, Expert\'s permit, Around 25 vacation days per year',
				qualifications: 'Citizen of USA, Canada, UK, Australia, New Zealand or South Africa',
				apply: 'If interested please contact Maggie at maggie@chinaimmersion.org and provide your name, gender, birth date, country of citizenship, Skype ID, timezone, education level, teaching certificate, personal photo and resume.'
			});
        }
    });
};