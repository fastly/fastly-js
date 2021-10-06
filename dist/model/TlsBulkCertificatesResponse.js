"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _TlsBulkCertificateResponseData = _interopRequireDefault(require("./TlsBulkCertificateResponseData"));

var _TlsBulkCertificatesResponseAllOf = _interopRequireDefault(require("./TlsBulkCertificatesResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsBulkCertificatesResponse model module.
 * @module model/TlsBulkCertificatesResponse
 * @version 3.0.0-alpha1
 */
var TlsBulkCertificatesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsBulkCertificatesResponse</code>.
   * @alias module:model/TlsBulkCertificatesResponse
   */
  function TlsBulkCertificatesResponse() {
    _classCallCheck(this, TlsBulkCertificatesResponse);

    TlsBulkCertificatesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsBulkCertificatesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsBulkCertificatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificatesResponse} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificatesResponse} The populated <code>TlsBulkCertificatesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsBulkCertificatesResponse();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsBulkCertificateResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsBulkCertificatesResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


TlsBulkCertificatesResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

TlsBulkCertificatesResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/TlsBulkCertificateResponseData>} data
 */

TlsBulkCertificatesResponse.prototype['data'] = undefined;
var _default = TlsBulkCertificatesResponse;
exports["default"] = _default;