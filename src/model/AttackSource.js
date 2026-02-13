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
 * The AttackSource model module.
 * @module model/AttackSource
 * @version 15.0.0-beta.4
 */
class AttackSource {
    /**
     * Constructs a new <code>AttackSource</code>.
     * @alias module:model/AttackSource
     * @param country_code {String} Country code of the attack source
     * @param country_name {String} Name of the country
     * @param request_count {Number} Number of requests from this country
     * @param total_count {Number} Total number of attacks considered
     */
    constructor(country_code, country_name, request_count, total_count) { 
        
        AttackSource.initialize(this, country_code, country_name, request_count, total_count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, country_code, country_name, request_count, total_count) { 
        obj['country_code'] = country_code;
        obj['country_name'] = country_name;
        obj['request_count'] = request_count;
        obj['total_count'] = total_count;
    }

    /**
     * Constructs a <code>AttackSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttackSource} obj Optional instance to populate.
     * @return {module:model/AttackSource} The populated <code>AttackSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttackSource();

            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('country_name')) {
                obj['country_name'] = ApiClient.convertToType(data['country_name'], 'String');
            }
            if (data.hasOwnProperty('request_count')) {
                obj['request_count'] = ApiClient.convertToType(data['request_count'], 'Number');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Country code of the attack source
 * @member {String} country_code
 */
AttackSource.prototype['country_code'] = undefined;

/**
 * Name of the country
 * @member {String} country_name
 */
AttackSource.prototype['country_name'] = undefined;

/**
 * Number of requests from this country
 * @member {Number} request_count
 */
AttackSource.prototype['request_count'] = undefined;

/**
 * Total number of attacks considered
 * @member {Number} total_count
 */
AttackSource.prototype['total_count'] = undefined;






export default AttackSource;

