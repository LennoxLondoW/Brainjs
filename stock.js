let rawData = [
    {
        "open": 117.61,
        "high": 123.31,
        "low": 114.03,
        "close": 120.08
    },
    {
        "open": 152.45,
        "high": 157.2,
        "low": 148.74,
        "close": 152.35
    },
    {
        "open": 122.49,
        "high": 129.38,
        "low": 118.05,
        "close": 118.3
    },
    {
        "open": 149.67,
        "high": 152.33,
        "low": 146.72,
        "close": 149.79
    },
    {
        "open": 167.12,
        "high": 168.44,
        "low": 166.79,
        "close": 168.42
    },
    {
        "open": 119.05,
        "high": 128.12,
        "low": 118.65,
        "close": 125.73
    },
    {
        "open": 145.94,
        "high": 155.49,
        "low": 138.66,
        "close": 140.01
    },
    {
        "open": 194.86,
        "high": 196.95,
        "low": 187.56,
        "close": 191.75
    },
    {
        "open": 156.61,
        "high": 161.5,
        "low": 155.89,
        "close": 155.9
    },
    {
        "open": 114.9,
        "high": 121.74,
        "low": 107.92,
        "close": 115.05
    },
    {
        "open": 156.86,
        "high": 161.75,
        "low": 147.19,
        "close": 155.68
    },
    {
        "open": 148.79,
        "high": 155.75,
        "low": 144.07,
        "close": 155.66
    },
    {
        "open": 177.5,
        "high": 184.1,
        "low": 167.67,
        "close": 181.71
    },
    {
        "open": 162.95,
        "high": 163.08,
        "low": 159.57,
        "close": 160.78
    },
    {
        "open": 171.52,
        "high": 174.44,
        "low": 165.66,
        "close": 168.19
    },
    {
        "open": 159.73,
        "high": 166.52,
        "low": 152.59,
        "close": 163.56
    },
    {
        "open": 199.51,
        "high": 205.71,
        "low": 189.55,
        "close": 198.72
    },
    {
        "open": 139.31,
        "high": 147.04,
        "low": 131.71,
        "close": 135.1
    },
    {
        "open": 196.56,
        "high": 198.48,
        "low": 194.69,
        "close": 197.47
    },
    {
        "open": 138.77,
        "high": 141.89,
        "low": 138.33,
        "close": 141.45
    },
    {
        "open": 130.38,
        "high": 134.26,
        "low": 128.73,
        "close": 133.05
    },
    {
        "open": 100.9,
        "high": 103.48,
        "low": 92.47,
        "close": 96.4
    },
    {
        "open": 174.26,
        "high": 183.1,
        "low": 166.82,
        "close": 178.11
    },
    {
        "open": 104.15,
        "high": 112.76,
        "low": 97.27,
        "close": 109.78
    },
    {
        "open": 138.6,
        "high": 147.75,
        "low": 138.3,
        "close": 144.52
    },
    {
        "open": 106.16,
        "high": 114.28,
        "low": 105.81,
        "close": 109.23
    },
    {
        "open": 100.43,
        "high": 106.27,
        "low": 98.41,
        "close": 104.28
    },
    {
        "open": 178.41,
        "high": 178.53,
        "low": 176.44,
        "close": 177.51
    },
    {
        "open": 198.83,
        "high": 207.68,
        "low": 188.94,
        "close": 195.1
    },
    {
        "open": 183.4,
        "high": 188.4,
        "low": 177.01,
        "close": 185.31
    },
    {
        "open": 118.63,
        "high": 123.95,
        "low": 112.08,
        "close": 119.82
    },
    {
        "open": 182.5,
        "high": 187.3,
        "low": 173.32,
        "close": 179.96
    },
    {
        "open": 162.87,
        "high": 164.72,
        "low": 156.83,
        "close": 164
    },
    {
        "open": 102.01,
        "high": 108.78,
        "low": 93.21,
        "close": 94.21
    },
    {
        "open": 137.93,
        "high": 142.79,
        "low": 132.23,
        "close": 139.91
    },
    {
        "open": 184.46,
        "high": 187.79,
        "low": 183,
        "close": 183.48
    },
    {
        "open": 108.05,
        "high": 113.31,
        "low": 105.39,
        "close": 107.18
    },
    {
        "open": 176.01,
        "high": 177.52,
        "low": 172.26,
        "close": 176.96
    },
    {
        "open": 148.38,
        "high": 150.91,
        "low": 138.67,
        "close": 144.1
    },
    {
        "open": 107.93,
        "high": 117.22,
        "low": 100.93,
        "close": 110.65
    },
    {
        "open": 162.11,
        "high": 163.86,
        "low": 160.96,
        "close": 162.51
    },
    {
        "open": 104.07,
        "high": 113.24,
        "low": 96.07,
        "close": 104.28
    },
    {
        "open": 162.46,
        "high": 171.96,
        "low": 157.56,
        "close": 162.42
    },
    {
        "open": 126.24,
        "high": 133.35,
        "low": 123.67,
        "close": 131.5
    },
    {
        "open": 196.32,
        "high": 206.28,
        "low": 192.65,
        "close": 205.91
    },
    {
        "open": 145.71,
        "high": 151.57,
        "low": 136.35,
        "close": 147.3
    },
    {
        "open": 184.05,
        "high": 185.44,
        "low": 174.45,
        "close": 184.06
    },
    {
        "open": 188.1,
        "high": 195.91,
        "low": 182.85,
        "close": 193.31
    },
    {
        "open": 116.46,
        "high": 122.87,
        "low": 111.13,
        "close": 117.75
    },
    {
        "open": 145.69,
        "high": 146.91,
        "low": 142.62,
        "close": 143.54
    },
    {
        "open": 145.61,
        "high": 147.42,
        "low": 140.78,
        "close": 147.26
    },
    {
        "open": 128.22,
        "high": 135.19,
        "low": 127.8,
        "close": 130.81
    },
    {
        "open": 153.39,
        "high": 162.38,
        "low": 143.95,
        "close": 154.93
    },
    {
        "open": 133.59,
        "high": 135.89,
        "low": 126.98,
        "close": 133.97
    },
    {
        "open": 172.89,
        "high": 177.85,
        "low": 166.85,
        "close": 173.39
    },
    {
        "open": 105.17,
        "high": 107.78,
        "low": 101.76,
        "close": 106.3
    },
    {
        "open": 177.39,
        "high": 181.28,
        "low": 176.44,
        "close": 180.56
    },
    {
        "open": 153.09,
        "high": 161.47,
        "low": 147.48,
        "close": 159.75
    },
    {
        "open": 132.7,
        "high": 138.56,
        "low": 123.69,
        "close": 130.37
    },
    {
        "open": 168.94,
        "high": 171.03,
        "low": 160.51,
        "close": 163.69
    },
    {
        "open": 176.79,
        "high": 177.72,
        "low": 174.14,
        "close": 174.26
    },
    {
        "open": 131.28,
        "high": 136.04,
        "low": 122.01,
        "close": 130.44
    },
    {
        "open": 137.35,
        "high": 137.64,
        "low": 127.4,
        "close": 129.58
    },
    {
        "open": 136.57,
        "high": 143.53,
        "low": 135.64,
        "close": 136.87
    },
    {
        "open": 123.55,
        "high": 132.61,
        "low": 122.08,
        "close": 130.13
    },
    {
        "open": 172.68,
        "high": 174.17,
        "low": 171.76,
        "close": 173.2
    },
    {
        "open": 167.94,
        "high": 177.44,
        "low": 163.4,
        "close": 174.34
    },
    {
        "open": 145.54,
        "high": 151.63,
        "low": 144.25,
        "close": 148.98
    },
    {
        "open": 132.18,
        "high": 137.52,
        "low": 122.75,
        "close": 125.76
    },
    {
        "open": 143.19,
        "high": 144.66,
        "low": 140.96,
        "close": 144.57
    },
    {
        "open": 101.98,
        "high": 107.87,
        "low": 95.4,
        "close": 98.37
    },
    {
        "open": 110.37,
        "high": 117.63,
        "low": 108.53,
        "close": 114.12
    },
    {
        "open": 101.49,
        "high": 107.18,
        "low": 91.93,
        "close": 103.05
    },
    {
        "open": 131.76,
        "high": 137.39,
        "low": 129.57,
        "close": 134.87
    },
    {
        "open": 153.84,
        "high": 159.07,
        "low": 148.26,
        "close": 156.05
    },
    {
        "open": 100.47,
        "high": 109.05,
        "low": 96.81,
        "close": 107.54
    },
    {
        "open": 120.57,
        "high": 123.36,
        "low": 116.86,
        "close": 121.13
    },
    {
        "open": 155.12,
        "high": 162.46,
        "low": 146.86,
        "close": 157.42
    },
    {
        "open": 199.58,
        "high": 204.65,
        "low": 198.47,
        "close": 200.02
    },
    {
        "open": 100.19,
        "high": 101.99,
        "low": 96.78,
        "close": 101.27
    },
    {
        "open": 151.91,
        "high": 159.06,
        "low": 143.35,
        "close": 158.7
    },
    {
        "open": 147.14,
        "high": 152.01,
        "low": 143.48,
        "close": 147.42
    },
    {
        "open": 113.59,
        "high": 114.69,
        "low": 110.96,
        "close": 113.56
    },
    {
        "open": 102.54,
        "high": 105.67,
        "low": 93.45,
        "close": 94.48
    },
    {
        "open": 167.03,
        "high": 169.18,
        "low": 165.73,
        "close": 167.51
    },
    {
        "open": 121.84,
        "high": 122.91,
        "low": 119.97,
        "close": 120.45
    },
    {
        "open": 135.01,
        "high": 140.01,
        "low": 126.84,
        "close": 132.8
    },
    {
        "open": 137.68,
        "high": 145.2,
        "low": 127.81,
        "close": 137.67
    },
    {
        "open": 148.27,
        "high": 155.83,
        "low": 138.49,
        "close": 141.43
    },
    {
        "open": 138.11,
        "high": 143.56,
        "low": 136.38,
        "close": 140.37
    },
    {
        "open": 102.57,
        "high": 105.98,
        "low": 93.27,
        "close": 98.93
    },
    {
        "open": 198.29,
        "high": 202.52,
        "low": 197.69,
        "close": 202.37
    },
    {
        "open": 134.46,
        "high": 139.48,
        "low": 127.75,
        "close": 128.47
    },
    {
        "open": 150.84,
        "high": 156.56,
        "low": 147.84,
        "close": 153.38
    },
    {
        "open": 184.65,
        "high": 193.6,
        "low": 183.43,
        "close": 187.84
    },
    {
        "open": 109.34,
        "high": 111.22,
        "low": 102.11,
        "close": 107.19
    },
    {
        "open": 108.65,
        "high": 117.77,
        "low": 107.6,
        "close": 116.08
    },
    {
        "open": 100.66,
        "high": 101.56,
        "low": 92.67,
        "close": 100.57
    },
    {
        "open": 103.64,
        "high": 108.86,
        "low": 100.71,
        "close": 107.51
    },
    {
        "open": 126.41,
        "high": 132.05,
        "low": 121.27,
        "close": 124.63
    }
];


// function generateRandomStockData(companyName, startDate, endDate, numDays) {
//     const stockData = [];
//     let currentDate = new Date(startDate);

//     for (let day = 0; day < numDays; day++) {
//         const openPrice = Math.random() * (200 - 100) + 100;
//         const highPrice = openPrice + Math.random() * 10;
//         const lowPrice = openPrice - Math.random() * 10;
//         const closePrice = Math.random() * (highPrice - lowPrice) + lowPrice;

//         stockData.push({
//             // date: currentDate.toISOString().split('T')[0],
//             // company: companyName,
//             open:Number( openPrice.toFixed(2)),
//             high:Number( highPrice.toFixed(2)),
//             low: Number(lowPrice.toFixed(2)),
//             close: Number(closePrice.toFixed(2)),
//         });

//         currentDate.setDate(currentDate.getDate() + 1); // Move to the next day.
//     }

//     return stockData;
// }

// // Example usage:
// const companyName = "ABC Inc.";
// const startDate = "2023-01-01";
// const endDate = "2023-04-10";
// const numDays = 100;

// const stockMarketData = generateRandomStockData(companyName, startDate, endDate, numDays);
// console.log(stockMarketData);