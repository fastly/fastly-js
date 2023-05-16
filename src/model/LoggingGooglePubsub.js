/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LoggingCommon from './LoggingCommon';
import LoggingGcsCommon from './LoggingGcsCommon';
import LoggingGooglePubsubAllOf from './LoggingGooglePubsubAllOf';

/**
 * The LoggingGooglePubsub model module.
 * @module model/LoggingGooglePubsub
 * @version 4.0.0
 */
class LoggingGooglePubsub {
    /**
     * Constructs a new <code>LoggingGooglePubsub</code>.
     * @alias module:model/LoggingGooglePubsub
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingGcsCommon
     * @implements module:model/LoggingGooglePubsubAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingGcsCommon.initialize(this);LoggingGooglePubsubAllOf.initialize(this);
        LoggingGooglePubsub.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGooglePubsub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGooglePubsub} obj Optional instance to populate.
     * @return {module:model/LoggingGooglePubsub} The populated <code>LoggingGooglePubsub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGooglePubsub();
            LoggingCommon.constructFromObject(data, obj);
            LoggingGcsCommon.constructFromObject(data, obj);
            LoggingGooglePubsubAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'Number');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('account_name')) {
                obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingGooglePubsub.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingGooglePubsub.PlacementEnum} placement
 */
LoggingGooglePubsub.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingGooglePubsub.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingGooglePubsub.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingGooglePubsub.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingGooglePubsub.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} user
 */
LoggingGooglePubsub.prototype['user'] = undefined;

/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} secret_key
 */
LoggingGooglePubsub.prototype['secret_key'] = undefined;

/**
 * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
 * @member {String} account_name
 */
LoggingGooglePubsub.prototype['account_name'] = undefined;

/**
 * The Google Cloud Pub/Sub topic to which logs will be published. Required.
 * @member {String} topic
 */
LoggingGooglePubsub.prototype['topic'] = undefined;

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingGooglePubsub.prototype['project_id'] = undefined;


// Implement LoggingCommon interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommon.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommon.PlacementEnum} placement
 */
LoggingCommon.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommon.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingCommon.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommon.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommon.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
// Implement LoggingGcsCommon interface:
/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} user
 */
LoggingGcsCommon.prototype['user'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} secret_key
 */
LoggingGcsCommon.prototype['secret_key'] = undefined;
/**
 * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
 * @member {String} account_name
 */
LoggingGcsCommon.prototype['account_name'] = undefined;
// Implement LoggingGooglePubsubAllOf interface:
/**
 * The Google Cloud Pub/Sub topic to which logs will be published. Required.
 * @member {String} topic
 */
LoggingGooglePubsubAllOf.prototype['topic'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingGooglePubsubAllOf.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingGooglePubsubAllOf.prototype['project_id'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingGooglePubsub['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "waf_debug"
     * @const
     */
    "waf_debug": "waf_debug",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */
LoggingGooglePubsub['FormatVersionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "v1": 1,

    /**
     * value: 2
     * @const
     */
    "v2": 2
};



export default LoggingGooglePubsub;

