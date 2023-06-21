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
import RelationshipTlsDomainTlsDomain from './RelationshipTlsDomainTlsDomain';

/**
 * The RelationshipTlsDomain model module.
 * @module model/RelationshipTlsDomain
 * @version 4.2.1
 */
class RelationshipTlsDomain {
    /**
     * Constructs a new <code>RelationshipTlsDomain</code>.
     * The [TLS domain](/reference/api/tls/custom-certs/domains/) being enabled for TLS traffic. Required.
     * @alias module:model/RelationshipTlsDomain
     */
    constructor() { 
        
        RelationshipTlsDomain.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipTlsDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsDomain} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsDomain} The populated <code>RelationshipTlsDomain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipTlsDomain();

            if (data.hasOwnProperty('tls_domain')) {
                obj['tls_domain'] = RelationshipTlsDomainTlsDomain.constructFromObject(data['tls_domain']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} tls_domain
 */
RelationshipTlsDomain.prototype['tls_domain'] = undefined;






export default RelationshipTlsDomain;

