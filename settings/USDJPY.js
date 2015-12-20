var studies = require('../src/lib/studies');

module.exports = {
    configurations: [ { "trendPrChannel" : { "regression" : "trendPrChannel750_2" }, "prChannel" : { "lower2" : "prChannelLower200_2_20-2", "upper2" : "prChannelUpper200_2_20-2", "lower" : "prChannelLower200_2_20", "upper" : "prChannelUpper200_2_20" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : false, "ema50" : true, "ema100" : true, "ema200" : true }, { "trendPrChannel" : null, "prChannel" : { "lower2" : "prChannelLower200_2_20-2", "upper2" : "prChannelUpper200_2_20-2", "lower" : "prChannelLower200_2_20", "upper" : "prChannelUpper200_2_20" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : true, "ema50" : true, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel750_2" }, "prChannel" : { "lower2" : "prChannelLower200_2_215-2", "upper2" : "prChannelUpper200_2_215-2", "lower" : "prChannelLower200_2_215", "upper" : "prChannelUpper200_2_215" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : false, "ema50" : true, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel800_2" }, "prChannel" : { "lower2" : "prChannelLower200_3_195-2", "upper2" : "prChannelUpper200_3_195-2", "lower" : "prChannelLower200_3_195", "upper" : "prChannelUpper200_3_195" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : false, "ema50" : true, "ema100" : true, "ema200" : false }, { "trendPrChannel" : { "regression" : "trendPrChannel700_2" }, "prChannel" : { "lower2" : "prChannelLower100_3_215-2", "upper2" : "prChannelUpper100_3_215-2", "lower" : "prChannelLower100_3_215", "upper" : "prChannelUpper100_3_215" }, "rsi" : { "oversold" : 20, "overbought" : 80, "rsi" : "rsi5" }, "sma13" : true, "ema50" : false, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel850_2" }, "prChannel" : { "lower2" : "prChannelLower200_3_195-2", "upper2" : "prChannelUpper200_3_195-2", "lower" : "prChannelLower200_3_195", "upper" : "prChannelUpper200_3_195" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : false, "ema50" : true, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel700_2" }, "prChannel" : { "lower2" : "prChannelLower200_2_215-2", "upper2" : "prChannelUpper200_2_215-2", "lower" : "prChannelLower200_2_215", "upper" : "prChannelUpper200_2_215" }, "rsi" : { "oversold" : 5, "overbought" : 95, "rsi" : "rsi2" }, "sma13" : false, "ema50" : true, "ema100" : true, "ema200" : false }, { "trendPrChannel" : { "regression" : "trendPrChannel600_2" }, "prChannel" : { "lower2" : "prChannelLower200_2_20-2", "upper2" : "prChannelUpper200_2_20-2", "lower" : "prChannelLower200_2_20", "upper" : "prChannelUpper200_2_20" }, "rsi" : { "oversold" : 20, "overbought" : 80, "rsi" : "rsi7" }, "sma13" : false, "ema50" : false, "ema100" : true, "ema200" : true }, { "trendPrChannel" : null, "prChannel" : { "lower2" : "prChannelLower250_4_195-2", "upper2" : "prChannelUpper250_4_195-2", "lower" : "prChannelLower250_4_195", "upper" : "prChannelUpper250_4_195" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : true, "ema50" : true, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel750_2" }, "prChannel" : { "lower2" : "prChannelLower200_3_195-2", "upper2" : "prChannelUpper200_3_195-2", "lower" : "prChannelLower200_3_195", "upper" : "prChannelUpper200_3_195" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : false, "ema50" : false, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel500_2" }, "prChannel" : { "lower2" : "prChannelLower100_3_195-2", "upper2" : "prChannelUpper100_3_195-2", "lower" : "prChannelLower100_3_195", "upper" : "prChannelUpper100_3_195" }, "rsi" : { "oversold" : 20, "overbought" : 80, "rsi" : "rsi5" }, "sma13" : true, "ema50" : true, "ema100" : true, "ema200" : true } ],
    studies: [
        {study: studies.Ema, inputs: {length: 200}, outputMap: {ema: 'ema200'}},
        {study: studies.Ema, inputs: {length: 100}, outputMap: {ema: 'ema100'}},
        {study: studies.Ema, inputs: {length: 50}, outputMap: {ema: 'ema50'}},
        {study: studies.Sma, inputs: {length: 13}, outputMap: {sma: 'sma13'}},
        {study: studies.Rsi, inputs: {length: 7}, outputMap: {rsi: 'rsi7'}},
        {study: studies.Rsi, inputs: {length: 5}, outputMap: {rsi: 'rsi5'}},
        {study: studies.Rsi, inputs: {length: 2}, outputMap: {rsi: 'rsi2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel100_3_195', upper: 'prChannelUpper100_3_195', lower: 'prChannelLower100_3_195', upper2: 'prChannelUpper100_3_195-2', lower2: 'prChannelLower100_3_195-2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 2.15}, outputMap: {regression: 'prChannel100_3_215', upper: 'prChannelUpper100_3_215', lower: 'prChannelLower100_3_215', upper2: 'prChannelUpper100_3_215-2', lower2: 'prChannelLower100_3_215-2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 2.15}, outputMap: {regression: 'prChannel200_2_215', upper: 'prChannelUpper200_2_215', lower: 'prChannelLower200_2_215', upper2: 'prChannelUpper200_2_215-2', lower2: 'prChannelLower200_2_215-2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel200_3_195', upper: 'prChannelUpper200_3_195', lower: 'prChannelLower200_3_195', upper2: 'prChannelUpper200_3_195-2', lower2: 'prChannelLower200_3_195-2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 2.0}, outputMap: {regression: 'prChannel200_2_20', upper: 'prChannelUpper200_2_20', lower: 'prChannelLower200_2_20', upper2: 'prChannelUpper200_2_20-2', lower2: 'prChannelLower200_2_20-2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 1.95}, outputMap: {regression: 'prChannel250_4_195', upper: 'prChannelUpper250_4_195', lower: 'prChannelLower250_4_195', upper2: 'prChannelUpper250_4_195-2', lower2: 'prChannelLower250_4_195-2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 500, degree: 2}, outputMap: {regression: 'trendPrChannel500_2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 2}, outputMap: {regression: 'trendPrChannel600_2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 700, degree: 2}, outputMap: {regression: 'trendPrChannel700_2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 750, degree: 2}, outputMap: {regression: 'trendPrChannel750_2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 800, degree: 2}, outputMap: {regression: 'trendPrChannel800_2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 850, degree: 2}, outputMap: {regression: 'trendPrChannel850_2'}}
    ]
};
