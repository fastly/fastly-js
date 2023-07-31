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
 * The AclResponseAllOf model module.
 * @module model/AclResponseAllOf
 * @version 6.0.0
 */
class AclResponseAllOf {
    /**
     * Constructs a new <code>AclResponseAllOf</code>.
     * @alias module:model/AclResponseAllOf
     */
    constructor() { 
        
        AclResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AclResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclResponseAllOf} obj Optional instance to populate.
     * @return {module:model/AclResponseAllOf} The populated <code>AclResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AclResponseAllOf();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} service_id
 */
AclResponseAllOf.prototype['service_id'] = undefined;

/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
AclResponseAllOf.prototype['version'] = undefined;

/**
 * @member {String} id
 */
AclResponseAllOf.prototype['id'] = undefined;






export default AclResponseAllOf;

