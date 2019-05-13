import MatchersUtil = jasmine.MatchersUtil;
import CustomMatcherFactories = jasmine.CustomMatcherFactories;
import CustomEqualityTester = jasmine.CustomEqualityTester;
import CustomMatcher = jasmine.CustomMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;

export const PersonCustomMatchers: CustomMatcherFactories = {
    toBeOlderThan: (util: MatchersUtil, customEqualityTester: CustomEqualityTester[]): CustomMatcher => {
        return {
            compare: (actual: any, expected: any): CustomMatcherResult => {
                if (actual > expected) {
                    return {
                        pass: true,
                        message: `test is passed`
                    };
                } else {
                    return {
                        pass: false,
                        message: `test fails`
                    };
                }
            }
        };
    }
};
