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
 * The Acl model module.
 * @module model/Acl
 * @version 4.2.2
 */
class Acl {
    /**
     * Constructs a new <code>Acl</code>.
     * @alias module:model/Acl
     */
    constructor() { 
        
        Acl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Acl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Acl} obj Optional instance to populate.
     * @return {module:model/Acl} The populated <code>Acl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Acl();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
 * @member {String} name
 */
Acl.prototype['name'] = undefined;






export default Acl;

