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

/**
 * The LoggingGooglePubsubAdditional model module.
 * @module model/LoggingGooglePubsubAdditional
 * @version 7.4.0
 */
class LoggingGooglePubsubAdditional {
    /**
     * Constructs a new <code>LoggingGooglePubsubAdditional</code>.
     * @alias module:model/LoggingGooglePubsubAdditional
     */
    constructor() { 
        
        LoggingGooglePubsubAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGooglePubsubAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGooglePubsubAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingGooglePubsubAdditional} The populated <code>LoggingGooglePubsubAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGooglePubsubAdditional();

            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Google Cloud Pub/Sub topic to which logs will be published. Required.
 * @member {String} topic
 */
LoggingGooglePubsubAdditional.prototype['topic'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingGooglePubsubAdditional.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingGooglePubsubAdditional.prototype['project_id'] = undefined;






export default LoggingGooglePubsubAdditional;

