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
 * The WafFirewallVersionDataAttributes model module.
 * @module model/WafFirewallVersionDataAttributes
 * @version 7.6.0
 */
class WafFirewallVersionDataAttributes {
    /**
     * Constructs a new <code>WafFirewallVersionDataAttributes</code>.
     * @alias module:model/WafFirewallVersionDataAttributes
     */
    constructor() { 
        
        WafFirewallVersionDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafFirewallVersionDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionDataAttributes} The populated <code>WafFirewallVersionDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafFirewallVersionDataAttributes();

            if (data.hasOwnProperty('allowed_http_versions')) {
                obj['allowed_http_versions'] = ApiClient.convertToType(data['allowed_http_versions'], 'String');
            }
            if (data.hasOwnProperty('allowed_methods')) {
                obj['allowed_methods'] = ApiClient.convertToType(data['allowed_methods'], 'String');
            }
            if (data.hasOwnProperty('allowed_request_content_type')) {
                obj['allowed_request_content_type'] = ApiClient.convertToType(data['allowed_request_content_type'], 'String');
            }
            if (data.hasOwnProperty('allowed_request_content_type_charset')) {
                obj['allowed_request_content_type_charset'] = ApiClient.convertToType(data['allowed_request_content_type_charset'], 'String');
            }
            if (data.hasOwnProperty('arg_name_length')) {
                obj['arg_name_length'] = ApiClient.convertToType(data['arg_name_length'], 'Number');
            }
            if (data.hasOwnProperty('arg_length')) {
                obj['arg_length'] = ApiClient.convertToType(data['arg_length'], 'Number');
            }
            if (data.hasOwnProperty('combined_file_sizes')) {
                obj['combined_file_sizes'] = ApiClient.convertToType(data['combined_file_sizes'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('critical_anomaly_score')) {
                obj['critical_anomaly_score'] = ApiClient.convertToType(data['critical_anomaly_score'], 'Number');
            }
            if (data.hasOwnProperty('crs_validate_utf8_encoding')) {
                obj['crs_validate_utf8_encoding'] = ApiClient.convertToType(data['crs_validate_utf8_encoding'], 'Boolean');
            }
            if (data.hasOwnProperty('error_anomaly_score')) {
                obj['error_anomaly_score'] = ApiClient.convertToType(data['error_anomaly_score'], 'Number');
            }
            if (data.hasOwnProperty('high_risk_country_codes')) {
                obj['high_risk_country_codes'] = ApiClient.convertToType(data['high_risk_country_codes'], 'String');
            }
            if (data.hasOwnProperty('http_violation_score_threshold')) {
                obj['http_violation_score_threshold'] = ApiClient.convertToType(data['http_violation_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('inbound_anomaly_score_threshold')) {
                obj['inbound_anomaly_score_threshold'] = ApiClient.convertToType(data['inbound_anomaly_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('lfi_score_threshold')) {
                obj['lfi_score_threshold'] = ApiClient.convertToType(data['lfi_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('max_file_size')) {
                obj['max_file_size'] = ApiClient.convertToType(data['max_file_size'], 'Number');
            }
            if (data.hasOwnProperty('max_num_args')) {
                obj['max_num_args'] = ApiClient.convertToType(data['max_num_args'], 'Number');
            }
            if (data.hasOwnProperty('notice_anomaly_score')) {
                obj['notice_anomaly_score'] = ApiClient.convertToType(data['notice_anomaly_score'], 'Number');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('paranoia_level')) {
                obj['paranoia_level'] = ApiClient.convertToType(data['paranoia_level'], 'Number');
            }
            if (data.hasOwnProperty('php_injection_score_threshold')) {
                obj['php_injection_score_threshold'] = ApiClient.convertToType(data['php_injection_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('rce_score_threshold')) {
                obj['rce_score_threshold'] = ApiClient.convertToType(data['rce_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('restricted_extensions')) {
                obj['restricted_extensions'] = ApiClient.convertToType(data['restricted_extensions'], 'String');
            }
            if (data.hasOwnProperty('restricted_headers')) {
                obj['restricted_headers'] = ApiClient.convertToType(data['restricted_headers'], 'String');
            }
            if (data.hasOwnProperty('rfi_score_threshold')) {
                obj['rfi_score_threshold'] = ApiClient.convertToType(data['rfi_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('session_fixation_score_threshold')) {
                obj['session_fixation_score_threshold'] = ApiClient.convertToType(data['session_fixation_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('sql_injection_score_threshold')) {
                obj['sql_injection_score_threshold'] = ApiClient.convertToType(data['sql_injection_score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('total_arg_length')) {
                obj['total_arg_length'] = ApiClient.convertToType(data['total_arg_length'], 'Number');
            }
            if (data.hasOwnProperty('warning_anomaly_score')) {
                obj['warning_anomaly_score'] = ApiClient.convertToType(data['warning_anomaly_score'], 'Number');
            }
            if (data.hasOwnProperty('xss_score_threshold')) {
                obj['xss_score_threshold'] = ApiClient.convertToType(data['xss_score_threshold'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Allowed HTTP versions.
 * @member {String} allowed_http_versions
 * @default 'HTTP/1.0 HTTP/1.1 HTTP/2'
 */
WafFirewallVersionDataAttributes.prototype['allowed_http_versions'] = 'HTTP/1.0 HTTP/1.1 HTTP/2';

/**
 * A space-separated list of HTTP method names.
 * @member {String} allowed_methods
 * @default 'GET HEAD POST OPTIONS PUT PATCH DELETE'
 */
WafFirewallVersionDataAttributes.prototype['allowed_methods'] = 'GET HEAD POST OPTIONS PUT PATCH DELETE';

/**
 * Allowed request content types.
 * @member {String} allowed_request_content_type
 * @default 'application/x-www-form-urlencoded|multipart/form-data|text/xml|application/xml|application/x-amf|application/json|text/plain'
 */
WafFirewallVersionDataAttributes.prototype['allowed_request_content_type'] = 'application/x-www-form-urlencoded|multipart/form-data|text/xml|application/xml|application/x-amf|application/json|text/plain';

/**
 * Allowed request content type charset.
 * @member {String} allowed_request_content_type_charset
 * @default 'utf-8|iso-8859-1|iso-8859-15|windows-1252'
 */
WafFirewallVersionDataAttributes.prototype['allowed_request_content_type_charset'] = 'utf-8|iso-8859-1|iso-8859-15|windows-1252';

/**
 * The maximum allowed argument name length.
 * @member {Number} arg_name_length
 * @default 100
 */
WafFirewallVersionDataAttributes.prototype['arg_name_length'] = 100;

/**
 * The maximum allowed length of an argument.
 * @member {Number} arg_length
 * @default 400
 */
WafFirewallVersionDataAttributes.prototype['arg_length'] = 400;

/**
 * The maximum allowed size of all files (in bytes).
 * @member {Number} combined_file_sizes
 * @default 10000000
 */
WafFirewallVersionDataAttributes.prototype['combined_file_sizes'] = 10000000;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
WafFirewallVersionDataAttributes.prototype['comment'] = undefined;

/**
 * Score value to add for critical anomalies.
 * @member {Number} critical_anomaly_score
 * @default 6
 */
WafFirewallVersionDataAttributes.prototype['critical_anomaly_score'] = 6;

/**
 * CRS validate UTF8 encoding.
 * @member {Boolean} crs_validate_utf8_encoding
 */
WafFirewallVersionDataAttributes.prototype['crs_validate_utf8_encoding'] = undefined;

/**
 * Score value to add for error anomalies.
 * @member {Number} error_anomaly_score
 * @default 5
 */
WafFirewallVersionDataAttributes.prototype['error_anomaly_score'] = 5;

/**
 * A space-separated list of country codes in ISO 3166-1 (two-letter) format.
 * @member {String} high_risk_country_codes
 */
WafFirewallVersionDataAttributes.prototype['high_risk_country_codes'] = undefined;

/**
 * HTTP violation threshold.
 * @member {Number} http_violation_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['http_violation_score_threshold'] = undefined;

/**
 * Inbound anomaly threshold.
 * @member {Number} inbound_anomaly_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['inbound_anomaly_score_threshold'] = undefined;

/**
 * Local file inclusion attack threshold.
 * @member {Number} lfi_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['lfi_score_threshold'] = undefined;

/**
 * Whether a specific firewall version is locked from being modified.
 * @member {Boolean} locked
 * @default false
 */
WafFirewallVersionDataAttributes.prototype['locked'] = false;

/**
 * The maximum allowed file size, in bytes.
 * @member {Number} max_file_size
 * @default 10000000
 */
WafFirewallVersionDataAttributes.prototype['max_file_size'] = 10000000;

/**
 * The maximum number of arguments allowed.
 * @member {Number} max_num_args
 * @default 255
 */
WafFirewallVersionDataAttributes.prototype['max_num_args'] = 255;

/**
 * Score value to add for notice anomalies.
 * @member {Number} notice_anomaly_score
 * @default 4
 */
WafFirewallVersionDataAttributes.prototype['notice_anomaly_score'] = 4;

/**
 * @member {Number} number
 */
WafFirewallVersionDataAttributes.prototype['number'] = undefined;

/**
 * The configured paranoia level.
 * @member {Number} paranoia_level
 * @default 1
 */
WafFirewallVersionDataAttributes.prototype['paranoia_level'] = 1;

/**
 * PHP injection threshold.
 * @member {Number} php_injection_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['php_injection_score_threshold'] = undefined;

/**
 * Remote code execution threshold.
 * @member {Number} rce_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['rce_score_threshold'] = undefined;

/**
 * A space-separated list of allowed file extensions.
 * @member {String} restricted_extensions
 * @default '.asa/ .asax/ .ascx/ .axd/ .backup/ .bak/ .bat/ .cdx/ .cer/ .cfg/ .cmd/ .com/ .config/ .conf/ .cs/ .csproj/ .csr/ .dat/ .db/ .dbf/ .dll/ .dos/ .htr/ .htw/ .ida/ .idc/ .idq/ .inc/ .ini/ .key/ .licx/ .lnk/ .log/ .mdb/ .old/ .pass/ .pdb/ .pol/ .printer/ .pwd/ .resources/ .resx/ .sql/ .sys/ .vb/ .vbs/ .vbproj/ .vsdisco/ .webinfo/ .xsd/ .xsx'
 */
WafFirewallVersionDataAttributes.prototype['restricted_extensions'] = '.asa/ .asax/ .ascx/ .axd/ .backup/ .bak/ .bat/ .cdx/ .cer/ .cfg/ .cmd/ .com/ .config/ .conf/ .cs/ .csproj/ .csr/ .dat/ .db/ .dbf/ .dll/ .dos/ .htr/ .htw/ .ida/ .idc/ .idq/ .inc/ .ini/ .key/ .licx/ .lnk/ .log/ .mdb/ .old/ .pass/ .pdb/ .pol/ .printer/ .pwd/ .resources/ .resx/ .sql/ .sys/ .vb/ .vbs/ .vbproj/ .vsdisco/ .webinfo/ .xsd/ .xsx';

/**
 * A space-separated list of allowed header names.
 * @member {String} restricted_headers
 * @default '/proxy/ /lock-token/ /content-range/ /translate/ /if/'
 */
WafFirewallVersionDataAttributes.prototype['restricted_headers'] = '/proxy/ /lock-token/ /content-range/ /translate/ /if/';

/**
 * Remote file inclusion attack threshold.
 * @member {Number} rfi_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['rfi_score_threshold'] = undefined;

/**
 * Session fixation attack threshold.
 * @member {Number} session_fixation_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['session_fixation_score_threshold'] = undefined;

/**
 * SQL injection attack threshold.
 * @member {Number} sql_injection_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['sql_injection_score_threshold'] = undefined;

/**
 * The maximum size of argument names and values.
 * @member {Number} total_arg_length
 * @default 6400
 */
WafFirewallVersionDataAttributes.prototype['total_arg_length'] = 6400;

/**
 * Score value to add for warning anomalies.
 * @member {Number} warning_anomaly_score
 */
WafFirewallVersionDataAttributes.prototype['warning_anomaly_score'] = undefined;

/**
 * XSS attack threshold.
 * @member {Number} xss_score_threshold
 */
WafFirewallVersionDataAttributes.prototype['xss_score_threshold'] = undefined;






export default WafFirewallVersionDataAttributes;

