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
 * The Vcl model module.
 * @module model/Vcl
 * @version 12.1.0
 */
class Vcl {
    /**
     * Constructs a new <code>Vcl</code>.
     * @alias module:model/Vcl
     */
    constructor() { 
        
        Vcl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Vcl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vcl} obj Optional instance to populate.
     * @return {module:model/Vcl} The populated <code>Vcl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vcl();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('main')) {
                obj['main'] = ApiClient.convertToType(data['main'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The VCL code to be included.
 * @member {String} content
 */
Vcl.prototype['content'] = undefined;

/**
 * Set to `true` when this is the main VCL, otherwise `false`.
 * @member {Boolean} main
 */
Vcl.prototype['main'] = undefined;

/**
 * The name of this VCL.
 * @member {String} name
 */
Vcl.prototype['name'] = undefined;






export default Vcl;

