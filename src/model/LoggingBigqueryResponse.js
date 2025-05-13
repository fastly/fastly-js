/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LoggingBigqueryAdditional from './LoggingBigqueryAdditional';
import LoggingCommonResponse from './LoggingCommonResponse';
import LoggingGcsCommon from './LoggingGcsCommon';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The LoggingBigqueryResponse model module.
 * @module model/LoggingBigqueryResponse
 * @version 11.0.0
 */
class LoggingBigqueryResponse {
    /**
     * Constructs a new <code>LoggingBigqueryResponse</code>.
     * @alias module:model/LoggingBigqueryResponse
     * @implements module:model/LoggingCommonResponse
     * @implements module:model/LoggingGcsCommon
     * @implements module:model/LoggingBigqueryAdditional
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     */
    constructor() { 
        LoggingCommonResponse.initialize(this);LoggingGcsCommon.initialize(this);LoggingBigqueryAdditional.initialize(this);Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);
        LoggingBigqueryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingBigqueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingBigqueryResponse} obj Optional instance to populate.
     * @return {module:model/LoggingBigqueryResponse} The populated <code>LoggingBigqueryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingBigqueryResponse();
            LoggingCommonResponse.constructFromObject(data, obj);
            LoggingGcsCommon.constructFromObject(data, obj);
            LoggingBigqueryAdditional.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'String');
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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */
LoggingBigqueryResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingBigqueryResponse.PlacementEnum} placement
 */
LoggingBigqueryResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingBigqueryResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */
LoggingBigqueryResponse.prototype['format'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingBigqueryResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingBigqueryResponse.prototype['format_version'] = undefined;

/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} user
 */
LoggingBigqueryResponse.prototype['user'] = undefined;

/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} secret_key
 */
LoggingBigqueryResponse.prototype['secret_key'] = undefined;

/**
 * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
 * @member {String} account_name
 */
LoggingBigqueryResponse.prototype['account_name'] = undefined;

/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */
LoggingBigqueryResponse.prototype['dataset'] = undefined;

/**
 * Your BigQuery table.
 * @member {String} table
 */
LoggingBigqueryResponse.prototype['table'] = undefined;

/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */
LoggingBigqueryResponse.prototype['template_suffix'] = undefined;

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingBigqueryResponse.prototype['project_id'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingBigqueryResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingBigqueryResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingBigqueryResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingBigqueryResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
LoggingBigqueryResponse.prototype['version'] = undefined;


// Implement LoggingCommonResponse interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommonResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommonResponse.PlacementEnum} placement
 */
LoggingCommonResponse.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommonResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommonResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommonResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingCommonResponse.prototype['format_version'] = undefined;
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
// Implement LoggingBigqueryAdditional interface:
/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */
LoggingBigqueryAdditional.prototype['name'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */
LoggingBigqueryAdditional.prototype['format'] = undefined;
/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */
LoggingBigqueryAdditional.prototype['dataset'] = undefined;
/**
 * Your BigQuery table.
 * @member {String} table
 */
LoggingBigqueryAdditional.prototype['table'] = undefined;
/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */
LoggingBigqueryAdditional.prototype['template_suffix'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingBigqueryAdditional.prototype['project_id'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingBigqueryResponse['PlacementEnum'] = {

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
 * @enum {String}
 * @readonly
 */
LoggingBigqueryResponse['FormatVersionEnum'] = {

    /**
     * value: "1"
     * @const
     */
    "v1": "1",

    /**
     * value: "2"
     * @const
     */
    "v2": "2"
};



export default LoggingBigqueryResponse;

