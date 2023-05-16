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
 * The Http3AllOf model module.
 * @module model/Http3AllOf
 * @version 4.0.0
 */
class Http3AllOf {
    /**
     * Constructs a new <code>Http3AllOf</code>.
     * @alias module:model/Http3AllOf
     */
    constructor() { 
        
        Http3AllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Http3AllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Http3AllOf} obj Optional instance to populate.
     * @return {module:model/Http3AllOf} The populated <code>Http3AllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Http3AllOf();

            if (data.hasOwnProperty('feature_revision')) {
                obj['feature_revision'] = ApiClient.convertToType(data['feature_revision'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Revision number of the HTTP/3 feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */
Http3AllOf.prototype['feature_revision'] = undefined;






export default Http3AllOf;

