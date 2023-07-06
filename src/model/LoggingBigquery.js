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
import LoggingBigqueryAllOf from './LoggingBigqueryAllOf';
import LoggingCommon from './LoggingCommon';
import LoggingGcsCommon from './LoggingGcsCommon';

/**
 * The LoggingBigquery model module.
 * @module model/LoggingBigquery
 * @version 5.0.0
 */
class LoggingBigquery {
    /**
     * Constructs a new <code>LoggingBigquery</code>.
     * @alias module:model/LoggingBigquery
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingGcsCommon
     * @implements module:model/LoggingBigqueryAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingGcsCommon.initialize(this);LoggingBigqueryAllOf.initialize(this);
        LoggingBigquery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingBigquery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingBigquery} obj Optional instance to populate.
     * @return {module:model/LoggingBigquery} The populated <code>LoggingBigquery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingBigquery();
            LoggingCommon.constructFromObject(data, obj);
            LoggingGcsCommon.constructFromObject(data, obj);
            LoggingBigqueryAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('dataset')) {
                obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
            }
            if (data.hasOwnProperty('table')) {
                obj['table'] = ApiClient.convertToType(data['table'], 'String');
            }
            if (data.hasOwnProperty('template_suffix')) {
                obj['template_suffix'] = ApiClient.convertToType(data['template_suffix'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */
LoggingBigquery.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingBigquery.PlacementEnum} placement
 */
LoggingBigquery.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingBigquery.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingBigquery.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingBigquery.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */
LoggingBigquery.prototype['format'] = undefined;

/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} user
 */
LoggingBigquery.prototype['user'] = undefined;

/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} secret_key
 */
LoggingBigquery.prototype['secret_key'] = undefined;

/**
 * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
 * @member {String} account_name
 */
LoggingBigquery.prototype['account_name'] = undefined;

/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */
LoggingBigquery.prototype['dataset'] = undefined;

/**
 * Your BigQuery table.
 * @member {String} table
 */
LoggingBigquery.prototype['table'] = undefined;

/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */
LoggingBigquery.prototype['template_suffix'] = undefined;

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingBigquery.prototype['project_id'] = undefined;


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
// Implement LoggingBigqueryAllOf interface:
/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */
LoggingBigqueryAllOf.prototype['name'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */
LoggingBigqueryAllOf.prototype['format'] = undefined;
/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */
LoggingBigqueryAllOf.prototype['dataset'] = undefined;
/**
 * Your BigQuery table.
 * @member {String} table
 */
LoggingBigqueryAllOf.prototype['table'] = undefined;
/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */
LoggingBigqueryAllOf.prototype['template_suffix'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingBigqueryAllOf.prototype['project_id'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingBigquery['PlacementEnum'] = {

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
LoggingBigquery['FormatVersionEnum'] = {

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



export default LoggingBigquery;

