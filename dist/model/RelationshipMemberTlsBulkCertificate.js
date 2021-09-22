"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeTlsBulkCertificate = _interopRequireDefault(require("./TypeTlsBulkCertificate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberTlsBulkCertificate model module.
 * @module model/RelationshipMemberTlsBulkCertificate
 * @version 3.0.0-alpha1
 */
var RelationshipMemberTlsBulkCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberTlsBulkCertificate</code>.
   * @alias module:model/RelationshipMemberTlsBulkCertificate
   */
  function RelationshipMemberTlsBulkCertificate() {
    _classCallCheck(this, RelationshipMemberTlsBulkCertificate);

    RelationshipMemberTlsBulkCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberTlsBulkCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberTlsBulkCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberTlsBulkCertificate} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberTlsBulkCertificate} The populated <code>RelationshipMemberTlsBulkCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberTlsBulkCertificate();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsBulkCertificate["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberTlsBulkCertificate;
}();
/**
 * Alphanumeric string identifying a TLS bulk certificate.
 * @member {String} id
 */


RelationshipMemberTlsBulkCertificate.prototype['id'] = undefined;
/**
 * @member {module:model/TypeTlsBulkCertificate} type
 */

RelationshipMemberTlsBulkCertificate.prototype['type'] = undefined;
var _default = RelationshipMemberTlsBulkCertificate;
exports["default"] = _default;