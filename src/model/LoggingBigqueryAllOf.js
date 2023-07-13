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

/**
 * The LoggingBigqueryAllOf model module.
 * @module model/LoggingBigqueryAllOf
 * @version 5.0.2
 */
class LoggingBigqueryAllOf {
    /**
     * Constructs a new <code>LoggingBigqueryAllOf</code>.
     * @alias module:model/LoggingBigqueryAllOf
     */
    constructor() { 
        
        LoggingBigqueryAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingBigqueryAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingBigqueryAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingBigqueryAllOf} The populated <code>LoggingBigqueryAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingBigqueryAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
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






export default LoggingBigqueryAllOf;

