export default ({ env }) => ({
    'import-export-entries': {
        enabled: true,
        config: {},
    },
    transformer: {
        enabled: true,
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
            requestTransforms: {
                wrapBodyWithDataKey: true,
            },
        },
    },
});
