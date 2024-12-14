// 載入 JSON 檔案
fetch('frontendDeveloper.json')
  .then(response => response.json())
  .then(data => {
    // 長條圖 1：接案公司薪資滿意度平均分數
    const freelanceSalaries = data
      .filter(d => d.company.industry === "接案公司")
      .map(d => parseInt(d.company.salary_score));

    const freelanceAvgScore = freelanceSalaries.reduce((a, b) => a + b, 0) / freelanceSalaries.length;

    c3.generate({
      bindto: '#salary-satisfaction',
      data: {
        columns: [
          ['接案公司薪資滿意度平均分數', freelanceAvgScore]
        ],
        type: 'bar'
      },
      axis: {
        x: {
          type: 'category',
          categories: ['接案公司']
        }
      }
    });

    // 長條圖 2：博弈和電商產業的平均滿意度
    const industries = ['博弈', '電商'];
    const industryScores = industries.map(industry => {
      const scores = data
        .filter(d => d.company.industry.includes(industry))
        .map(d => parseInt(d.company.score));

      return scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    });

    c3.generate({
      bindto: '#industry-satisfaction',
      data: {
        columns: [
          ['博弈公司平均滿意度', industryScores[0]],
          ['電商公司平均滿意度', industryScores[1]]
        ],
        type: 'bar'
      },
      axis: {
        x: {
          type: 'category',
          categories: industries
        }
      }
    });

    // 圓餅圖 1：男性和女性比例
    const genderCounts = data.reduce((counts, person) => {
      counts[person.gender] = (counts[person.gender] || 0) + 1;
      return counts;
    }, {});

    c3.generate({
      bindto: '#gender-pie',
      data: {
        columns: Object.entries(genderCounts),
        type: 'pie'
      }
    });

    // 圓餅圖 2：薪水區間分佈
    const salaryRanges = data.reduce((counts, person) => {
      counts[person.company.salary] = (counts[person.company.salary] || 0) + 1;
      return counts;
    }, {});

    c3.generate({
      bindto: '#salary-pie',
      data: {
        columns: Object.entries(salaryRanges),
        type: 'pie'
      }
    });
  })
  .catch(err => console.error('Failed to fetch data:', err));
