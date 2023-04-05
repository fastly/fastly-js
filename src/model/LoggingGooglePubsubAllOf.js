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
 * The LoggingGooglePubsubAllOf model module.
 * @module model/LoggingGooglePubsubAllOf
 * @version 3.3.0
 */
class LoggingGooglePubsubAllOf {
    /**
     * Constructs a new <code>LoggingGooglePubsubAllOf</code>.
     * @alias module:model/LoggingGooglePubsubAllOf
     */
    constructor() { 
        
        LoggingGooglePubsubAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGooglePubsubAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGooglePubsubAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingGooglePubsubAllOf} The populated <code>LoggingGooglePubsubAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGooglePubsubAllOf();

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






export default LoggingGooglePubsubAllOf;

