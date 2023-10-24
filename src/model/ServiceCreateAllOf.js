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
 * The ServiceCreateAllOf model module.
 * @module model/ServiceCreateAllOf
 * @version 6.2.0
 */
class ServiceCreateAllOf {
    /**
     * Constructs a new <code>ServiceCreateAllOf</code>.
     * @alias module:model/ServiceCreateAllOf
     */
    constructor() { 
        
        ServiceCreateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceCreateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceCreateAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceCreateAllOf} The populated <code>ServiceCreateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceCreateAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of this service.
 * @member {module:model/ServiceCreateAllOf.TypeEnum} type
 */
ServiceCreateAllOf.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ServiceCreateAllOf['TypeEnum'] = {

    /**
     * value: "vcl"
     * @const
     */
    "vcl": "vcl",

    /**
     * value: "wasm"
     * @const
     */
    "wasm": "wasm"
};



export default ServiceCreateAllOf;

